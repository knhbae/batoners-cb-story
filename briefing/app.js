import { initializeReturns } from './returns.js?v=3';
import { slides, sources } from './slides.js?v=4';

const deck = document.getElementById('slides');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const toc = document.getElementById('toc-dialog');
const notes = document.getElementById('notes-dialog');
const fullscreenButton = document.getElementById('fullscreen-button');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let current = indexFromHash();
let opener;
let animation;
let pointer;

function indexFromHash() {
  const named = slides.findIndex(slide => `#${slide.id}` === location.hash);
  if (named !== -1) return named;
  const value = location.hash.match(/^#slide-(\d+)$/)?.[1];
  const index = Number(value) - 1;
  return Number.isInteger(index) && index >= 0 && index < slides.length ? index : 0;
}

deck.innerHTML = slides.map((slide, index) => `<article class="slide ${slide.layout || ''}" id="page-${index + 1}" aria-labelledby="title-${index + 1}" ${index !== current ? 'hidden' : ''}>
  <header class="slide-heading"><span class="section-label">${String(index + 1).padStart(2, '0')} / ${slide.section}</span><h1 id="title-${index + 1}" ${slide.layout === 'opening' ? 'class="sr-only"' : ''}>${slide.title}</h1></header>
  <div class="slide-body">${slide.body}</div>
  <footer class="slide-footer"><p>${slide.foot}</p>${slide.refs.length ? `<button type="button" data-notes="${index}" aria-label="${slide.title} 메모와 출처 보기">근거 보기 ↗</button>` : ''}</footer>
</article>`).join('');
deck.querySelectorAll('.table-wrap').forEach(wrapper=>{wrapper.setAttribute('role','region');wrapper.setAttribute('tabindex','0');wrapper.setAttribute('aria-label',`${wrapper.closest('.slide').querySelector('h1').textContent} 표`);});
initializeReturns();
document.getElementById('toc-list').innerHTML = slides.map((slide, index) => `<li><button type="button" data-slide="${index}"><span>${String(index + 1).padStart(2, '0')}</span>${slide.title}</button></li>`).join('');
document.getElementById('print-sources').innerHTML = `<h1>출처와 계산 가정</h1><p>설명회 초안 · 2026.11.28. 투자 조건·일정은 검토안이며 최종 계약을 확인합니다.</p>${slides.filter(slide=>slide.refs.length).map(slide=>`<section><h2>${slide.title}</h2><ul>${slide.refs.map(key=>`<li>${sources[key].title}<br>${new URL(sources[key].url,location.href).href}</li>`).join('')}</ul></section>`).join('')}<p>세액 예시: 지방소득세 포함. 공제 비교표는 총급여 1억원·추가 공제 전 과세표준 7,000만원, 각 방법에 1,000만원을 별도로 사용한 경우입니다. 연금저축 단독 공제 한도 600만원·IRP 합산 900만원, 카드 기존 사용액 2,500만원·기본 한도 250만원·자녀 한도 가산 없음, 다른 한도 미사용을 가정합니다. 일반기부금은 종교단체 외 적격 단체입니다. ISA 운용소득의 과세 혜택은 별도입니다. 소득 구간별 벤처투자 세액표는 1,000만원 전액 소득공제를 가정합니다. 납입·소비·기부 공제 비교에서는 운용수익·손실을 제외합니다. 개인 경험의 수치·결과는 기재하지 않았습니다.</p><p>3년 수익 비교: 초기 자금 1,000만원만 납입, 공제액 재투자와 추가 납입 없음. ISA·연금은 표에 선택한 연 수익률(수수료 차감 후·세전)을 3년간 적용합니다. 예금은 연 3%·매년 15.4% 이자 과세 후 재예치. 일반형 ISA는 3년 정상 해지·순이익 200만원 초과분에 9.9%. 연금 계좌 유지는 인출세 차감 전 가치, 3년 후 일반 해지는 공제받은 원금과 운용수익에 16.5% 과세. 공제받지 않은 원금은 과세제외금액으로 확인되었다고 가정합니다. CB는 이자 0%·원금 전액 상환 가정입니다. 합산효과는 공제액과 운용·인출 증감액의 합계로 원금을 제외합니다. 연환산은 (1 + 합산효과 / 1,000만원)^(1/3) − 1. 환급 시점을 반영한 IRR이나 예상·보장수익률이 아닙니다. 실제 수익·세금·회수 가능성은 상품과 개인에 따라 다릅니다.</p>`;

function render(animate = false) {
  document.querySelectorAll('.slide').forEach((element,index)=>{element.hidden=index!==current;});
  const slide = slides[current];
  document.title = `${slide.title} · 설명회 초안`;
  deck.dataset.slide = String(current + 1);
  previous.disabled = current === 0;
  next.disabled = current === slides.length - 1;
  document.getElementById('page-count').textContent = `${String(current + 1).padStart(2,'0')} / ${slides.length}`;
  document.getElementById('progress-fill').style.width = `${(current + 1) / slides.length * 100}%`;
  document.getElementById('announcement').textContent = `${current + 1} / ${slides.length}. ${slide.title}`;
  document.querySelectorAll('[data-slide]').forEach(button=>{
    if(Number(button.dataset.slide)===current) button.setAttribute('aria-current','page');
    else button.removeAttribute('aria-current');
  });
  animation?.cancel();
  if(animate && !reducedMotion.matches) animation=deck.animate([{opacity:.5,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:150,easing:'ease-out'});
}

function goTo(index, push = true) {
  if(index < 0 || index >= slides.length || index === current) return;
  const active=document.activeElement;
  const focusWasInSlide=active instanceof Element && active.closest('.slide');
  current = index;
  if(push) history.pushState(null,'',`#${slides[current].id}`);
  render(true);
  if(focusWasInSlide) deck.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'instant'});
}

function openDialog(dialog, trigger) {
  opener = trigger;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow='hidden';
  dialog.querySelector('[data-close]').focus({preventScroll:true});
}

function showNotes(index,trigger) {
  const slide=slides[index];
  document.getElementById('notes-body').innerHTML=`<h3>${String(index+1).padStart(2,'0')}. ${slide.title}</h3><h4>발표 메모</h4><ul>${slide.notes.map(text=>`<li>${text}</li>`).join('')}</ul><h4>출처</h4>${slide.refs.length ? `<ul class="source-list">${slide.refs.map(key=>`<li><a href="${sources[key].url}" target="_blank" rel="noopener noreferrer">${sources[key].title} ↗</a></li>`).join('')}</ul>` : '<p>발표자 경험 또는 이번 설명회의 진행안입니다.</p>'}`;
  openDialog(notes,trigger);
}

async function toggleFullscreen() {
  try {
    if(document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    document.getElementById('announcement').textContent='이 브라우저에서 전체화면을 열 수 없습니다. 브라우저의 전체화면 기능을 사용해 주세요.';
  }
}

previous.addEventListener('click',()=>goTo(current-1));
next.addEventListener('click',()=>goTo(current+1));
document.getElementById('toc-button').addEventListener('click',event=>openDialog(toc,event.currentTarget));
document.getElementById('notes-button').addEventListener('click',event=>showNotes(current,event.currentTarget));
document.getElementById('print-button').addEventListener('click',()=>{toc.close();window.print();});
fullscreenButton.hidden=!document.fullscreenEnabled;
fullscreenButton.addEventListener('click',toggleFullscreen);
document.addEventListener('fullscreenchange',()=>{fullscreenButton.textContent=document.fullscreenElement?'전체화면 종료':'전체화면';});
document.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if(!button) return;
  if(button.hasAttribute('data-slide')) {toc.close();goTo(Number(button.dataset.slide));}
  else if(button.hasAttribute('data-close')) button.closest('dialog').close();
  else if(button.hasAttribute('data-notes')) showNotes(Number(button.dataset.notes),button);
});
for(const dialog of [toc,notes]) {
  dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true});});
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog) return;
    const rect=dialog.getBoundingClientRect();
    if(event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialog.close();
  });
}
window.addEventListener('hashchange',()=>{if(/^#slide-/.test(location.hash) || slides.some(slide=>`#${slide.id}`===location.hash)) goTo(indexFromHash(),false);});
window.addEventListener('popstate',()=>goTo(indexFromHash(),false));
document.addEventListener('keydown',event=>{
  if(toc.open || notes.open || event.ctrlKey || event.metaKey || event.altKey || event.target.closest('input,textarea,select,[contenteditable]')) return;
  if(event.key==='ArrowRight' || event.key==='PageDown') {event.preventDefault();goTo(current+1);}
  else if(event.key==='ArrowLeft' || event.key==='PageUp') {event.preventDefault();goTo(current-1);}
  else if(event.key==='Home') {event.preventDefault();goTo(0);}
  else if(event.key==='End') {event.preventDefault();goTo(slides.length-1);}
  else if(event.key===' ' && !event.target.closest('button,a,summary')) {event.preventDefault();goTo(current+1);}
  else if(event.key.toLowerCase()==='n') {event.preventDefault();showNotes(current,document.getElementById('notes-button'));}
  else if(event.key.toLowerCase()==='f' && document.fullscreenEnabled) {event.preventDefault();toggleFullscreen();}
});
deck.addEventListener('pointerdown',event=>{
  if(!event.isPrimary || event.pointerType==='mouse' || event.target.closest('button,a,summary,details,input,select,textarea,.table-wrap')) return;
  pointer={id:event.pointerId,x:event.clientX,y:event.clientY,time:performance.now()};
});
deck.addEventListener('touchmove',event=>{
  if(!pointer || event.touches.length!==1) return;
  const dx=event.touches[0].clientX-pointer.x,dy=event.touches[0].clientY-pointer.y;
  if(Math.abs(dx)>18 && Math.abs(dx)>Math.abs(dy)*1.6) event.preventDefault();
},{passive:false});
deck.addEventListener('pointerup',event=>{
  if(!pointer || event.pointerId!==pointer.id) return;
  const start=pointer;pointer=undefined;
  const dx=event.clientX-start.x,dy=event.clientY-start.y;
  if(Math.abs(dx)>65 && Math.abs(dx)>Math.abs(dy)*1.6 && performance.now()-start.time<1200) requestAnimationFrame(()=>goTo(current+(dx<0?1:-1)));
});
deck.addEventListener('pointercancel',()=>{pointer=undefined;});
// Keep a single answer open so the question slide stays easy to present.
deck.querySelectorAll('details').forEach(detail=>detail.addEventListener('toggle',()=>{
  if(detail.open) deck.querySelectorAll('details').forEach(other=>{if(other!==detail) other.open=false;});
}));
render();
