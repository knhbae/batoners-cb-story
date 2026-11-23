export const investorTimeline = () => `
  <p class="investor-caption">투자자 관점 · 1,000만원 투자 예시</p>
  <ol class="investor-timeline" aria-label="투자자 자금 흐름">
    <li>
      <div class="investor-date"><time datetime="2026-12-18">2026.12.18</time><small>납입 목표</small></div>
      <span class="investor-node" aria-hidden="true"></span>
      <div class="investor-event"><strong>1,000만원 납입</strong><small>내 계좌에서 회사로</small></div>
    </li>
    <li>
      <div class="investor-date"><span>2027년</span><small>세금 정산</small></div>
      <span class="investor-node" aria-hidden="true"></span>
      <div class="investor-event"><strong>소득공제 반영</strong><small>환급 증가 또는 납부 감소<br>개인별 상이</small></div>
    </li>
    <li>
      <div class="investor-date"><span>2029년 이후</span><small>3년 경과 후 만기</small></div>
      <span class="investor-node" aria-hidden="true"></span>
      <div class="investor-event"><strong>1,000만원<br class="desktop-break"> 상환 예정</strong><small>주식 미전환 시</small></div>
    </li>
  </ol>
  <div class="holding-note">
    <strong>공제 혜택 유지: 원칙적으로 3년 보유</strong>
    <p>투자일부터 계산해요.<br>공제는 3년이 되기 전에도 받을 수 있어요.</p>
    <button type="button" data-open-guide data-guide-section="holding-period">법령 근거·예외 보기 <span aria-hidden="true">↗</span></button>
  </div>`;

export const investorFootnote = '투자자 약정 이자 없음 · 원금 상환 미보장<br>참여 의사 확인용 초안 · 2026.11.23';
