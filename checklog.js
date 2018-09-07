#!/usr/bin/env node

// https://github.com/GoogleChrome/devsummit/blob/master/validate/checklog.js

'use strict';

const fs = require('fs');

try {
  const path = process.argv[2];
  const data = fs.readFileSync(path);
  const {pwa, performance} = JSON.parse(data).categories;

  console.log(`PWA score: ${pwa.score}`);
  console.log(`Performance score: ${performance.score}`);

  if (pwa.score < 0.4) {
    console.log(JSON.stringify(pwa, null, 2));
    process.exit(1);
  }

  if (performance.score < 0.5) {
    console.log(JSON.stringify(performance, null, 2));
    process.exit(1);
  }

  // All good.
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
