#!/bin/bash

# this script dependence "pup", "jq"
USERNAME=$1

SELECTOR='tr:nth-child(2) span:nth-child(1) json{}'
USERDATA=$(curl -s https://atcoder.jp/users/$USERNAME |pup $SELECTOR)
COLOR=$(echo $USERDATA |jq --raw-output ".[0].class" |sed 's/user-//')
RATE=$(echo $USERDATA |jq --raw-output ".[0].text")

COLORCODE=$(echo '{
  "red": "#FF0000",
  "orange": "#FF8000",
  "yellow": "#C0C000",
  "blue": "#0000FF",
  "cyan": "#00C0C0",
  "green": "#008000",
  "brown": "#804000",
  "gray": "#808080",
  "unrated": "#000000"
}' |jq --raw-output .$COLOR |sed 's/^.//')

BADGE_URL="https://img.shields.io/badge/AtCoder-$RATE-$COLORCODE.svg"
BADGE_FILENAME=atcoder-badge-$USERNAME.svg

echo user: $USERNAME
echo color: $COLOR
echo rate: $RATE
echo badge-url: $BADGE_URL
wget $BADGE_URL -q -O $BADGE_FILENAME
echo successfly exported badge to ./$BADGE_FILENAME
