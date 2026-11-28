import assert from 'node:assert/strict';
import { calculateReturns } from '../briefing/returns.js';
import { taxExamples, slides, sources } from '../briefing/slides.js';

const row = (rate, mode, id) => calculateReturns(rate, mode).find(item => item.id === id);
const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < .000002, `${actual} != ${expected}`);

// Independent cash-flow examples, in 만원, including actual withdrawal tax.
const expected = {
  hold: [264, 78.088782, 92.727, 171.927, 211.527],
  withdraw: [264, 78.088782, 92.727, 57.627045, 47.727045]
};
for (const mode of Object.keys(expected)) {
  calculateReturns(3, mode).forEach((item, index) => close(item.effect, expected[mode][index]));
}

// A 7% ISA scenario exceeds the 200만원 exemption: 225.043 - 2.479257 tax.
close(row(7, 'hold', 'isa').effect, 222.563743);
close(row(7, 'withdraw', 'pension').effect, 168.110905);
close(row(7, 'withdraw', 'combined').effect, 158.210905);
// Losses do not produce a tax refund; zero return does not create ISA income.
close(row(-5, 'hold', 'isa').effect, -142.625);
close(row(0, 'hold', 'isa').effect, 0);
// With no growth, early withdrawal tax exceeds the initial pension tax credit.
close(row(0, 'withdraw', 'pension').effect, -19.8);
close(row(0, 'withdraw', 'combined').effect, -29.7);
// Non-credited principal stays tax-exempt, even after a severe loss.
close(row(-50, 'withdraw', 'pension').effect, -795.8);
close(row(-50, 'withdraw', 'combined').effect, -760.325);

for (const rate of [-5, 0, 3, 5, 7]) {
  for (const mode of ['hold', 'withdraw']) {
    const rows = calculateReturns(rate, mode);
    close(rows[0].effect, 264);
    close(rows[1].effect, 78.088782);
    for (const item of rows) {
      close(item.effect, item.credit + item.netGain);
      close(item.cumulative, item.effect / 10);
      assert.ok(Math.abs((1 + item.annual / 100) ** 3 * 1000 - 1000 - item.effect) < .0001);
    }
  }
}
for (const invalid of [NaN, Infinity, -51, 51, '3']) {
  assert.throws(() => calculateReturns(invalid), RangeError);
}
assert.throws(() => calculateReturns(3, 'unknown'), RangeError);

assert.equal(taxExamples.find(item => item.saving === 264).rate, row(3, 'hold', 'cb').annual.toFixed(2));
for (const example of taxExamples) {
  assert.equal(example.rate, ((Math.cbrt(1 + example.saving / 1000) - 1) * 100).toFixed(2));
}
assert.equal(slides.length, 22);
assert.equal(new Set(slides.map(slide => slide.id)).size, slides.length);
for (const slide of slides) {
  assert.ok(slide.refs.every(key => sources[key]), `Missing source: ${slide.id}`);
}
console.log('PASS: 3-year cash-flow examples, tax boundaries, 10 scenarios, annualization, 22 slides and source references.');
