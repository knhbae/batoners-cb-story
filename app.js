import { investorTimeline, investorFootnote } from './investor-timeline.js?v=1';
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>';
const examples = [
  { before: '3,000만원', after: '2,000만원', saving: 165, rate: '5.50', average: '55' },
  { before: '7,000만원', after: '6,000만원', saving: 264, rate: '8.80', average: '88' },
  { before: '1억 2,000만원', after: '1억 1,000만원', saving: 385, rate: '12.83', average: '128.33' }
];
let selectedExample = 1;
const caseControls = () => `<div class="case-label" id="case-label">투자공제 전 과세표준을 골라 보세요</div><div class="case-options" role="group" aria-labelledby="case-label">${examples.map((item, index) => `<button type="button" data-example="${index}" aria-pressed="${index === selectedExample}">${item.before}</button>`).join('')}</div>`;
const guideLink = (text = '계산 가정·근거 보기') => `<button type="button" data-open-guide>${text}</button>`;
const pages = [
  {
    title: '우리 모임의 다음 장', image: '01-gathering',
    alt: '카페 테이블에 모인 세 사람이 모임을 이어갈 방법을 이야기합니다.',
    speech: '우리 모임,<br>오래 이어가려면?',
    content: () => `<h1 class="cover-title">우리 모임의 <br>다음 장</h1>${investorTimeline()}<p class="cover-terms"><strong>100만원부터</strong><small>모임 구성원 대상</small></p>`,
    footnote: investorFootnote
  },
  {
    title: '함께 투자한다는 건', image: '02-cb',
    alt: '세 사람이 계약서를 함께 읽으며 CB 투자 방식을 살펴봅니다.',
    speech: '우리 모임 안에도<br>벤처기업이 있잖아.',
    content: () => '<h1>함께 투자한다는 건</h1><p>모임 재원을 고민하다, 벤처투자로 소득공제를 받은 구성원의 경험에서 아이디어를 얻었어요.</p><div class="definition"><b>CB</b><span>전환사채<br>조건에 따라 주식으로 바꿀 수 있는 채권</span></div><p>희망하는 구성원이 회사의 CB에 투자하고, 회사는 투자금을 우선 <strong>회사 명의 예금</strong>으로 보관하는 구상이에요.</p><div class="mini-dialogue">투자자는 요건을 갖추면<br>소득공제를 신청해요.</div>',
    footnote: '기업 자격·투자 방식·개인별 공제 요건을 충족해야 합니다.'
  },
  {
    title: '돈은 이렇게 움직여요', image: '03-flow',
    alt: '회사와 은행이 있는 거리에서 투자금의 흐름을 이야기하는 세 사람.',
    speech: '1,000만원씩 10명이면<br>모두 1억원이네!',
    content: () => '<h1>돈은 이렇게<br>움직여요</h1><div class="flow"><div class="flow-row"><span class="flow-who">개인</span><span><strong>1인당 1,000만원 투자</strong><small>10명 참여 예시</small></span></div><div class="flow-row"><span class="flow-who">회사</span><span><strong>총 1억원 수령 → 예금 보관</strong><small>예금이자는 회사에 발생</small></span></div><div class="flow-row"><span class="flow-who">개인</span><span><strong>2027년 세금 정산 때 공제 반영</strong><small>환급액 증가 또는 납부세액 감소</small></span></div><div class="flow-row"><span class="flow-who">만기</span><span><strong>미전환 원금 상환 예정</strong><small>발행일부터 3년 경과 후 · 지급 이자 없음</small></span></div></div><p class="quiet">주식으로 전환하지 않고 만기까지 보유하는 예시예요.</p>',
    footnote: '정해진 날짜에 절세액이 입금되는 구조는 아닙니다. 원금 상환은 보장되지 않습니다.'
  },
  {
    title: '세금은 얼마나 줄까요?', image: '04-tax',
    alt: '계산기와 메모를 놓고 소득공제 예시를 계산하는 두 사람.',
    speech: '같은 1,000만원을 넣어도<br>절세액은 다를 수 있어.',
    content: () => { const item = examples[selectedExample]; return `<h1>세금은 얼마나<br>줄까요?</h1><p>1,000만원 전액을 소득공제받는 경우를 가정해 볼게요.</p>${caseControls()}<div class="tax-result" aria-live="polite"><p class="result-label">지방소득세 포함 · 단순 세액 감소액</p><div class="amount">${item.saving}<small>만원</small></div><p class="result-change">과세표준 ${item.before} → ${item.after}</p></div><p class="case-caption">과세표준은 연봉과 달라요. 공제 요건·한도 충족을 가정했고, 다른 세액공제의 변화는 반영하지 않았어요.</p>`; },
    footnote: () => `실제 절세액은 개인별로 달라집니다. ${guideLink()}`
  },
  {
    title: '연환산 숫자의 뜻', image: '05-compare',
    alt: '달력과 동전을 저울에 놓고 기간에 따른 절세 효과를 비교합니다.',
    speech: '이건 회사가 주는<br>이자라는 뜻은 아니야.',
    content: () => { const item = examples[selectedExample]; return `<h1>연환산 숫자의 뜻</h1><p>한 번의 절세 효과를 투자기간 <strong>3년으로 나눠</strong> 비교해 본 숫자예요.</p>${caseControls()}<div class="tax-result" aria-live="polite"><p class="result-label">연환산 이자수익률 상당치 · 3년 단순환산</p><div class="amount">${item.rate}<small>%</small></div></div><div class="formula">${item.saving}만원 ÷ 1,000만원 ÷ 3년 × 100<br><strong>연평균 ${item.average}만원 규모의 절세 효과</strong></div><p class="case-caption">실제 지급 이자나 보장수익률이 아니에요. 환급 시점과 복리 효과는 반영하지 않았어요.</p>`; },
    footnote: () => `앞 장과 같은 공제 가정입니다. ${guideLink('세 가지 예시 표 보기')}`
  },
  {
    title: '예금이자는 어디에 쓰나요?', image: '06-advisory',
    alt: '수어통역 등 서비스 개발을 위해 의견을 나누고 기록하는 사업 자문회의.',
    speech: '우리의 경험을<br>사업 자문으로 연결해 보자.',
    content: () => '<h1>예금이자는<br>어디에 쓰나요?</h1><p>회사에 발생한 예금이자에서 세금과 운용비용을 고려해, <strong>사업 자문회의 운영 예산</strong>을 검토해요.</p><div class="mini-dialogue">AI·기술, 정부 정책·공공사업,<br>경영 분야의 의견을 나눠요.</div><p>수어통역 등 실제 회사의 서비스·사업 개발을 다루는 자문이어야 해요.</p><p class="quiet">회의 내용과 지출 증빙을 남기고, 운영 예산과 공유 방식을 정해요.</p>',
    footnote: '일반 모임 비용을 이름만 바꿔 회사의 자문비로 처리하는 방식은 아닙니다.'
  },
  {
    title: '시작 전, 함께 확인해요', image: '07-contract',
    alt: '계약서와 달력을 꼼꼼하게 확인하는 세 사람.',
    speech: '혜택만큼,<br>조건도 같이 읽어야지.',
    content: () => '<h1>시작 전,<br>함께 확인해요</h1><ul class="rule-list"><li><b>100만원부터</b> 참여하는 안이에요.</li><li>공제 혜택 유지를 위해 <b>원칙적으로 투자일부터 3년 보유</b>해요.<br>실제 만기는 3년이 지나도록 정해요.</li><li>투자자에게 지급하는 <b>이자는 없어요.</b></li><li>중도 회수는 <b>계약상 조건과 회사와의 합의</b> 등에 따라 달라져요.</li></ul><p class="risk-note">3년이 지나기 전 회수·양도하면 법정 예외를 제외하고 공제 세액이 추징돼요. 원금 손실이나 상환 지연 가능성도 있어요.</p>',
    footnote: '검토안 기준입니다. 주식 전환·콜옵션 등 세부 조건은 계약 전에 안내·확정합니다.'
  },
  {
    title: '다음 장은 이 일정으로', image: '08-calendar',
    alt: '달력을 함께 보며 앞으로의 일정을 정리하는 세 사람.',
    speech: '관심 있는 분들과<br>다음 이야기를 이어가요.',
    content: () => `<h1>다음 장은<br>이 일정으로</h1><ol class="timeline"><li><time datetime="2026-12-06"><small>2026년</small>12.06</time><span>참여 의사와<br>희망 금액 확인</span></li><li><time datetime="2026-12-18"><small>2026년</small>12.18</time><span>최종 조건 안내<br>계약·납입 목표</span></li><li><time datetime="2027-01-15"><small>2027년</small>01.15</time><span>투자확인서와<br>신청 안내 전달 목표</span></li></ol><p class="quiet">근로자는 근무처 연말정산 기한에,<br>사업자 등은 통상 5월 신고 때 제출해요.</p><button type="button" class="text-link" data-open-guide>전체 조건과 근거 읽기 ${arrow}</button>`,
    footnote: '2026년 중 CB 발행 완료를 전제로 합니다. 확인서 발급·보완에 따라 전달일은 조정될 수 있습니다.'
  }
];

const book = document.getElementById('book');
const content = document.getElementById('story-content');
const image = document.getElementById('scene');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
const toc = document.getElementById('toc-dialog');
const guide = document.getElementById('guide-dialog');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const visited = new Set();
let current = readHash();
let pageAnimation;
let guidePromise;
let openTrigger;

function readHash() {
  const match = location.hash.match(/^#page-([1-8])$/);
  return match ? Number(match[1]) - 1 : 0;
}

progress.innerHTML = pages.map((item, index) => `<button type="button" data-page="${index}" aria-label="${index + 1}장: ${item.title}"></button>`).join('');
document.getElementById('toc-list').innerHTML = pages.map((item, index) => `<li><button type="button" data-page="${index}"><span class="toc-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span>${item.title}</span></button></li>`).join('');
document.getElementById('toc-button').hidden = false;

function render({ animate = false, direction = 1, announce = true } = {}) {
  const item = pages[current];
  visited.add(current);
  book.dataset.page = String(current + 1);
  image.src = `assets/${item.image}.webp`;
  image.alt = item.alt;
  document.getElementById('speech').innerHTML = item.speech;
  content.innerHTML = item.content();
  document.getElementById('page-number').textContent = `${String(current + 1).padStart(2, '0')} / 08`;
  document.getElementById('page-footnote').innerHTML = typeof item.footnote === 'function' ? item.footnote() : item.footnote;
  document.getElementById('page-count').textContent = `${current + 1} / 8`;
  document.getElementById('next-label').textContent = current === 7 ? '처음부터' : '다음 이야기';
  previous.disabled = current === 0;
  next.setAttribute('aria-label', current === 7 ? '첫 이야기로 돌아가기' : '다음 이야기');
  document.title = current === 0 ? '우리 모임의 다음 장' : `${item.title} · 우리 모임의 다음 장`;
  document.querySelectorAll('[data-page]').forEach(button => {
    const index = Number(button.dataset.page);
    if (index === current) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
    button.classList.toggle('visited', visited.has(index) && index !== current);
  });
  if (announce) document.getElementById('page-announcement').textContent = `${current + 1} / 8. ${item.title}`;
  pageAnimation?.cancel();
  if (animate && !reducedMotion.matches) {
    pageAnimation = book.animate([
      { opacity: 0.45, transform: `perspective(1800px) rotateY(${direction * 5}deg) translateX(${direction * 8}px)` },
      { opacity: 1, transform: 'perspective(1800px) rotateY(0deg) translateX(0)' }
    ], { duration: 340, easing: 'cubic-bezier(.22,.61,.36,1)' });
  }
  // Preload only the adjacent chapter so first paint stays light.
  if (pages[current + 1]) { const preload = new Image(); preload.src = `assets/${pages[current + 1].image}.webp`; }
}

function goTo(index, push = true) {
  if (!Number.isInteger(index) || index < 0 || index >= pages.length || index === current) return;
  const direction = index > current ? 1 : -1;
  current = index;
  if (push) history.pushState({ page: current + 1 }, '', `#page-${current + 1}`);
  render({ animate: true, direction });
  if (window.matchMedia('(max-width:760px)').matches) window.scrollTo({ top: 0, behavior: 'instant' });
}

function openDialog(dialog, trigger) {
  openTrigger = trigger;
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  dialog.querySelector('[data-close]')?.focus({ preventScroll: true });
}
function closeDialog(dialog) { dialog.close(); }

async function loadGuide() {
  guidePromise ??= fetch('guide.html', { cache: 'no-cache' }).then(response => {
    if (!response.ok) throw new Error('Could not load guide');
    return response.text();
  }).then(html => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const article = doc.getElementById('guide-content');
    if (!article) throw new Error('Guide content missing');
    document.getElementById('guide-body').innerHTML = `<article class="guide-content">${article.innerHTML}</article>`;
  }).catch(() => {
    guidePromise = undefined;
    document.getElementById('guide-body').innerHTML = '<p>설명문을 불러오지 못했습니다. <a href="guide.html">전체 내용 페이지를 직접 열어 주세요.</a></p>';
  });
  return guidePromise;
}

document.addEventListener('click', event => {
  const target = event.target.closest('button,a');
  if (!target) return;
  if (target.matches('[data-open-guide]')) {
    event.preventDefault(); openDialog(guide, target);
    loadGuide().then(() => {
      if (!guide.open) return;
      const section = target.dataset.guideSection === 'holding-period' ? guide.querySelector('#holding-period') : null;
      if (section) {
        section.scrollIntoView({ block: 'start', behavior: 'instant' });
        section.focus({ preventScroll: true });
      } else guide.scrollTop = 0;
    });
  } else if (target.matches('[data-page]')) {
    if (toc.open) closeDialog(toc);
    goTo(Number(target.dataset.page));
  } else if (target.matches('[data-example]')) {
    selectedExample = Number(target.dataset.example);
    render({ announce: false });
    document.querySelector(`[data-example="${selectedExample}"]`)?.focus({ preventScroll: true });
  } else if (target.matches('[data-close]')) {
    closeDialog(target.closest('dialog'));
  }
});
document.getElementById('toc-button').addEventListener('click', event => openDialog(toc, event.currentTarget));
previous.addEventListener('click', () => goTo(current - 1));
next.addEventListener('click', () => goTo(current === 7 ? 0 : current + 1));

for (const dialog of [toc, guide]) {
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    if (openTrigger?.isConnected) openTrigger.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
}

document.addEventListener('keydown', event => {
  if (toc.open || guide.open || event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
  if (event.key === 'ArrowRight') { event.preventDefault(); goTo(current + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(current - 1); }
  if (event.key === 'Home') { event.preventDefault(); goTo(0); }
  if (event.key === 'End') { event.preventDefault(); goTo(7); }
});
window.addEventListener('popstate', () => goTo(readHash(), false));
window.addEventListener('hashchange', () => goTo(readHash(), false));

let touchStart;
book.addEventListener('pointerdown', event => {
  if (!event.isPrimary) { touchStart = undefined; return; }
  if (!['touch', 'pen'].includes(event.pointerType) || event.target.closest('button,a')) return;
  touchStart = { x: event.clientX, y: event.clientY, id: event.pointerId, time: performance.now() };
});
book.addEventListener('touchmove', event => {
  if (!touchStart || event.touches.length !== 1) return;
  const dx = Math.abs(event.touches[0].clientX - touchStart.x);
  const dy = Math.abs(event.touches[0].clientY - touchStart.y);
  if (dx > 16 && dx > dy * 1.6 && event.cancelable) event.preventDefault();
}, { passive: false });
book.addEventListener('pointerup', event => {
  if (!touchStart || touchStart.id !== event.pointerId) return;
  const dx = event.clientX - touchStart.x;
  const dy = event.clientY - touchStart.y;
  const elapsed = performance.now() - touchStart.time;
  touchStart = undefined;
  if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.6 && elapsed < 1200) {
    const destination = current + (dx < 0 ? 1 : -1);
    // Finish the touch event before replacing content and moving the viewport.
    requestAnimationFrame(() => goTo(destination));
  }
});
book.addEventListener('pointercancel', () => { touchStart = undefined; });

render({ announce: false });
