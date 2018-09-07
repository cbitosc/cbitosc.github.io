#!/bin/bash

# remove old logs
rm -f lighthouse-log.json

# run server and get its pid
serve -l 5858 &
p="$!"

# quit if server fails to run
if [[ -z "$p" ]]; then
  echo "> Failed to start server"
  exit 1
fi

# run lighthouse test
lighthouse --output=json --output-path=./lighthouse-log.json http://127.0.0.1:5858/

if [[ -n $? ]]; then
  echo "> Lighthouse failed to run"
  exit 1
fi

# check values
node ./checklog.js ./lighthouse-log.json

# kill the server
kill $p

if [[ -z "$?" ]]; then
  echo "> Server stopped"
fi
