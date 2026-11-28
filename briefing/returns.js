const PRINCIPAL = 1000; // Amounts are in KRW 10,000 units (만원).
const round = value => Math.round((value + Number.EPSILON) * 1000000) / 1000000;
const money = value => value.toLocaleString('ko-KR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const percent = value => `${value.toFixed(2)}%`;

export function calculateReturns(rate = 3, pensionMode = 'hold') {
  if (!Number.isFinite(rate) || rate < -50 || rate > 50 || !['hold', 'withdraw'].includes(pensionMode)) throw new RangeError('Invalid scenario');
  const growth = PRINCIPAL * ((1 + rate / 100) ** 3 - 1);
  const depositGain = PRINCIPAL * ((1 + .03 * (1 - .154)) ** 3 - 1);
  const isaGain = growth - Math.max(0, growth - 200) * .099;
  const pensionGain = eligible => growth - (pensionMode === 'withdraw' ? Math.max(0, PRINCIPAL + growth - (PRINCIPAL - eligible)) * .165 : 0);
  const rows = [
    { id: 'cb', name: '이번 CB', detail: '약정 이자 0% · 원금 전액 상환 가정', credit: 264, netGain: 0 },
    { id: 'deposit', name: '일반 예금', detail: '연 3% 고정 가정 · 매년 세후 이자 재예치', credit: 0, netGain: depositGain },
    { id: 'isa', name: '일반형 ISA', detail: `연 ${rate}% 가정 · 3년 후 정상 해지`, credit: 0, netGain: isaGain },
    { id: 'pension', name: '연금저축만', detail: `연 ${rate}% 가정 · ${pensionMode === 'hold' ? '계좌 유지, 인출세 전' : '3년 후 연금 외 수령'}`, credit: 79.2, netGain: pensionGain(600) },
    { id: 'combined', name: '연금저축 + IRP', detail: `연 ${rate}% 가정 · ${pensionMode === 'hold' ? '계좌 유지, 인출세 전' : '3년 후 연금 외 수령'}`, credit: 118.8, netGain: pensionGain(900) }
  ];
  return rows.map(row => {
    const effect = row.credit + row.netGain;
    return { ...row, netGain: round(row.netGain), effect: round(effect), cumulative: round(effect / PRINCIPAL * 100), annual: round(((1 + effect / PRINCIPAL) ** (1 / 3) - 1) * 100) };
  });
}

function rowsMarkup(rate, mode) {
  return calculateReturns(rate, mode).map(row => `<tr ${row.id === 'cb' ? 'class="comparison-reference"' : ''}><th scope="row">${row.name}<small>${row.detail}</small></th><td><strong>${money(row.effect)}만원</strong><small>공제 ${money(row.credit)} + 운용·인출 ${money(row.netGain)}</small></td><td>${percent(row.cumulative)}<small>연환산 ${percent(row.annual)}</small></td></tr>`).join('');
}
function modeDescription(mode) {
  return mode === 'hold' ? '연금은 인출세를 빼기 전 계좌 가치입니다. 3년 뒤 바로 쓸 수 있는 현금과 다릅니다.' : '연금을 3년 뒤 해지하는 가정: 공제받은 원금과 운용수익에 16.5% 적용. 법정 예외는 제외합니다.';
}
export function returnsMarkup() {
  return `<p class="return-baseline">1,000만원 · 총급여 1억원 / 과세표준 7,000만원 · 공제액 재투자 없음</p><div class="return-controls"><label>ISA·연금 연수익 가정 <select id="return-rate">${[-5, 0, 3, 5, 7].map(rate=>`<option value="${rate}" ${rate===3?'selected':''}>${rate}%</option>`).join('')}</select></label><label>연금 처리 <select id="pension-mode"><option value="hold">계좌 유지 · 인출세 전</option><option value="withdraw">3년 후 해지 · 세후</option></select></label></div><div class="table-wrap"><table class="returns-table"><thead><tr><th scope="col">방법 · 수익률 가정</th><th scope="col">공제 + 3년 운용·인출 효과<small>원금 제외 · 단위: 만원</small></th><th scope="col">3년 누적 비교율</th></tr></thead><tbody id="return-rows">${rowsMarkup(3,'hold')}</tbody></table></div><p id="return-mode-note" class="return-mode-note">${modeDescription('hold')}</p><p class="return-assumptions">수익 예측이 아닌 가정 비교입니다. 연환산은 (1 + 합산효과 ÷ 1,000만원)^(1/3) − 1이며 환급 시점은 반영하지 않습니다.</p><span id="return-announcement" class="sr-only" aria-live="polite"></span>`;
}
export function initializeReturns() {
  const rateInput = document.getElementById('return-rate');
  const modeInput = document.getElementById('pension-mode');
  if (!rateInput || !modeInput) return;
  const update = () => {
    const rate = Number(rateInput.value), mode = modeInput.value;
    document.getElementById('return-rows').innerHTML = rowsMarkup(rate,mode);
    document.getElementById('return-mode-note').textContent = modeDescription(mode);
    document.getElementById('return-announcement').textContent = `연 수익률 ${rate}%, ${modeInput.selectedOptions[0].textContent}으로 비교표를 갱신했습니다.`;
  };
  rateInput.addEventListener('change',update);
  modeInput.addEventListener('change',update);
}
