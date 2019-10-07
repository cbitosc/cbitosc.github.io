#!/bin/bash

$CHROME_PATH --version

# remove logs
rm -f *-log.json

# run server and get its pid
serv -p 5858 -d . >/dev/null &
p="$!"

# quit if server fails to run
if [[ -z "$p" ]]; then
  echo "> Failed to start server"
  exit 1
else
  echo "> Server started"
fi

# run lighthouse test
lighthouse \
  --output=json --output-path=./lighthouse-log.json \
  --only-categories=accessibility,best-practices,performance,seo \
  --quiet --chrome-flags="--headless" \
  http://127.0.0.1:5858/

if [[ $? -gt 0 ]]; then
  echo "> Lighthouse failed to run"
  exit 1
fi

# check values
echo "> Checking logs"
./checklog.js ./lighthouse-log.json

# kill the server
kill $p

if [[ -z "$?" ]]; then
  echo "> Server stopped"
fi
