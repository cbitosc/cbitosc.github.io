#!/usr/bin/env node

// https://github.com/GoogleChrome/devsummit/blob/master/validate/checklog.js

const fs = require('fs');

try {
  const data = fs.readFileSync(process.argv[2]);
  const {accessibility, performance, seo, 'best-practices': bp} = JSON.parse(data).categories;

  console.log([
    '',
    '      Lighthouse scores',
    `   Accessibility   |  ${accessibility.score}`,
    `   Performance     |  ${performance.score}`,
    `   SEO             |  ${seo.score}`,
    `   Best practices  |  ${bp.score}`,
    ''
  ].join('\n'));

  if (accessibility.score < 0.7 || performance.score < 0.9 || seo.score < 0.7 || bp.score < 0.8) {
    process.exit(1);
  }

  // All good.
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
