import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const base = process.env.STORY_URL || 'http://127.0.0.1:4173/';
const destination = process.env.STORY_URL ? 'output/live' : 'output/local';
await fs.mkdir(destination, { recursive: true });
const browser = await chromium.launch({ headless: true });
const report = { base, browser: browser.version(), checks: [], pages: [], errors: [] };
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
page.on('pageerror', error => report.errors.push(error.message));
page.on('response', response => { if (response.url().startsWith(base) && response.status() >= 400) report.errors.push(response.status() + ' ' + response.url()); });
const chapter = async expected => assert.equal(await page.locator('#book').getAttribute('data-page'), String(expected));
const settle = async target => {
  await target.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(image => image.decode().catch(() => {}))); });
  await target.waitForTimeout(370);
};
const capture = async (target, file) => { await settle(target); await target.screenshot({ path: `${destination}/${file}.png`, fullPage: true }); };

try {
  assert.equal((await page.goto(base)).status(), 200);
  await chapter(1);
  assert.equal(await page.locator('#previous').isDisabled(), true);
  await capture(page, 'desktop-cover');
  for (let i = 2; i <= 8; i++) { await page.locator('#next').click(); await chapter(i); }
  assert.equal(await page.locator('#next-label').textContent(), '처음부터');
  await page.locator('#next').click(); await chapter(1);
  await page.keyboard.press('End'); await chapter(8);
  for (let i = 7; i >= 1; i--) { await page.locator('#previous').click(); await chapter(i); }
  await page.keyboard.press('ArrowRight'); await chapter(2);
  await page.keyboard.press('ArrowLeft'); await chapter(1);
  for (let i = 0; i < 5; i++) await page.locator('#next').click({ force: true });
  await chapter(6);
  report.checks.push('8 chapters, previous/next bounds, last-to-first, keyboard and rapid navigation');

  await page.locator('#toc-button').click();
  assert.equal(await page.locator('#toc-dialog').evaluate(element => element.open), true);
  await page.locator('#toc-list [data-page="3"]').click();
  await chapter(4);
  assert.equal(await page.locator('#toc-dialog').evaluate(element => element.open), false);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'toc-button');
  for (const [index, saving, rate] of [[0,'165','5.50'],[1,'264','8.80'],[2,'385','12.83']]) {
    await page.locator(`[data-example="${index}"]`).click();
    assert.ok((await page.locator('.amount').textContent()).includes(saving));
    await page.locator('#next').click(); await chapter(5);
    assert.ok((await page.locator('.amount').textContent()).includes(rate));
    assert.equal(await page.locator(`[data-example="${index}"]`).getAttribute('aria-pressed'), 'true');
    await page.locator('#previous').click(); await chapter(4);
  }
  await page.locator('[data-example="1"]').click();
  await capture(page, 'desktop-tax');
  await page.locator('#next').click();
  await capture(page, 'desktop-annual');
  report.checks.push('TOC, focus restoration, all three tax examples and 3-year comparison values');

  await page.locator('.header-nav [data-open-guide]').click();
  await page.locator('#guide-body table').first().waitFor();
  assert.equal(await page.locator('#guide-body table').count(), 4);
  assert.ok((await page.locator('#guide-body').textContent()).includes('연 12.83%'));
  await page.keyboard.press('ArrowRight'); await chapter(5);
  await capture(page, 'desktop-guide');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#guide-dialog').evaluate(element => element.open), false);
  assert.equal(await page.evaluate(() => document.activeElement.hasAttribute('data-open-guide')), true);
  await page.locator('#toc-button').click();
  await page.locator('#toc-dialog [data-close]').click();
  assert.equal(await page.locator('#toc-dialog').evaluate(element => element.open), false);
  report.checks.push('Guide content, source links, modal Escape/button close, no page navigation behind modal');

  await page.goto(base + '#page-7'); await chapter(7);
  await page.locator('#previous').click(); await chapter(6);
  await page.goBack(); await chapter(7);
  await page.goto(base + '#page-999'); await chapter(1);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('#next').click();
  assert.equal(await page.evaluate(() => document.getAnimations().length), 0);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  report.checks.push('Deep links, browser back, invalid-hash fallback, reduced-motion');

  for (const viewport of [{width:1440,height:1000},{width:1366,height:768},{width:768,height:1024},{width:390,height:844},{width:360,height:800}]) {
    await page.setViewportSize(viewport);
    for (let number = 1; number <= 8; number++) {
      await page.locator(`#progress [data-page="${number-1}"]`).click(); await chapter(number); await settle(page);
      const metrics = await page.evaluate(() => {
        const image=document.getElementById('scene');
        const content=document.getElementById('story-content').getBoundingClientRect();
        const foot=document.getElementById('page-footnote').getBoundingClientRect();
        const nav=document.querySelector('.reader-controls').getBoundingClientRect();
        return { width:innerWidth, scrollWidth:document.documentElement.scrollWidth, imageLoaded:image.naturalWidth>0, contentBottom:content.bottom, footTop:foot.top, navTop:nav.top, title:document.querySelector('h1').textContent, fonts:document.fonts.check('700 40px Gaegu') && document.fonts.check('400 18px Pretendard') };
      });
      assert.equal(metrics.scrollWidth,metrics.width, 'Horizontal overflow '+viewport.width+' page '+number);
      assert.ok(metrics.imageLoaded && metrics.fonts, 'Asset missing');
      assert.ok(metrics.contentBottom <= metrics.footTop+1, 'Content and footnote overlap');
      report.pages.push({viewport,number,...metrics});
      if (viewport.width === 390 || viewport.width === 1366) await page.screenshot({path:`${destination}/${viewport.width}-page-${number}.png`,fullPage:true});
    }
  }
  report.checks.push('All 8 chapters at five viewport sizes, images/fonts, no horizontal overflow or body/footnote overlap');

  const mobileContext=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});
  const mobile=await mobileContext.newPage();
  await mobile.goto(base); await settle(mobile);
  const cdp=await mobileContext.newCDPSession(mobile);
  async function swipe(from,to,y) {
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:from,y}]});
    for(let step=1;step<=8;step++) {
      await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:from+(to-from)*step/8,y:y+(step%2)}]});
      await mobile.waitForTimeout(25);
    }
    await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await mobile.waitForTimeout(400);
  }
  await swipe(320,70,240);
  assert.equal(await mobile.locator('#book').getAttribute('data-page'),'2','Touch next swipe');
  await swipe(70,320,240);
  assert.equal(await mobile.locator('#book').getAttribute('data-page'),'1','Touch previous swipe');
  async function tap(locator) {
    await locator.scrollIntoViewIfNeeded();
    const bounds=await locator.boundingBox();
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:bounds.x+bounds.width/2,y:bounds.y+bounds.height/2,id:0}]});
    await mobile.waitForTimeout(80);
    await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await mobile.waitForTimeout(120);
  }
  await tap(mobile.locator('.header-nav [data-open-guide]'));
  await mobile.locator('#guide-body table').first().waitFor();
  await capture(mobile,'mobile-guide');
  await tap(mobile.locator('#guide-dialog [data-close]'));
  await mobile.goto(base+'#page-4');
  await settle(mobile);
  await tap(mobile.locator('[data-example="2"]'));
  assert.ok((await mobile.locator('.amount').textContent()).includes('385'));
  await capture(mobile,'mobile-tax');
  await mobile.goto(base+'#page-6'); await settle(mobile);
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:180,y:680,id:0}]});
  for(let step=1;step<=8;step++) {
    await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:180,y:680-step*45,id:0}]});
    await mobile.waitForTimeout(25);
  }
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await mobile.waitForTimeout(400);
  assert.ok(await mobile.evaluate(()=>scrollY>50),'Vertical touch scrolling must remain available');
  assert.equal(await mobile.locator('#book').getAttribute('data-page'),'6','Vertical scroll must not flip chapters');
  await mobile.screenshot({path:`${destination}/mobile-scrolled.png`});
  await mobileContext.close();
  report.checks.push('Touch swipe both directions, immediate following tap, guide modal, vertical scrolling without flipping chapters');

  await page.goto(base+'guide.html');
  assert.equal(await page.locator('#guide-content h2').count(),6);
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),390);
  await capture(page,'standalone-guide');
  await page.emulateMedia({media:'print'});
  assert.equal(await page.locator('.site-header').isVisible(),false);
  await page.emulateMedia({media:'screen'});
  report.checks.push('Standalone guide, six sections, narrow layout and print stylesheet');

  const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const fallback=await nojs.newPage();
  await fallback.goto(base);
  assert.equal(await fallback.locator('noscript a').isVisible(),true);
  await fallback.locator('noscript a').click();
  assert.equal(await fallback.locator('#guide-content').isVisible(),true);
  await nojs.close();
  report.checks.push('No-JavaScript fallback to complete readable guide');
  assert.deepEqual(report.errors,[]);
  report.result='PASS';
} catch(error) {
  report.result='FAIL'; report.failure=error.stack;
  await page.screenshot({path:destination+'/failure.png',fullPage:true}).catch(()=>{});
  process.exitCode=1;
} finally {
  await fs.writeFile(destination+'/report.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify({result:report.result,checks:report.checks,pages:report.pages.length,errors:report.errors,failure:report.failure},null,2));
  await browser.close();
}
