#!/usr/bin/env node

// https://github.com/GoogleChrome/devsummit/blob/master/validate/checklog.js

const fs = require('fs');

try {
  const data = fs.readFileSync(process.argv[2]);
  const {accessibility, performance, seo, 'best-practices': bp} = JSON.parse(data).categories;

  const A11Y_MIN_SCORE = 0.7;
  const PERF_MIN_SCORE = 0.85;
  const SEO_MIN_SCORE = 0.7;
  const BP_MIN_SCORE = 0.7;

  console.log([
    '',
    '         Lighthouse scores',
    `   Accessibility   |  ${accessibility.score} / ${A11Y_MIN_SCORE}`,
    `   Performance     |  ${performance.score} / ${PERF_MIN_SCORE}`,
    `   SEO             |  ${seo.score} / ${SEO_MIN_SCORE}`,
    `   Best practices  |  ${bp.score} / ${BP_MIN_SCORE}`,
    ''
  ].join('\n'));

  if (accessibility.score < A11Y_MIN_SCORE
    || performance.score < PERF_MIN_SCORE
    || seo.score < SEO_MIN_SCORE
    || bp.score < BP_MIN_SCORE
  ) {
    process.exit(1);
  }

  // All good.
  process.exit(0);
} catch (e) {
  console.error(e);
  process.exit(1);
}
