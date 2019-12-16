EXT=$(ls | grep main | sed -e 's/main\.//')

echo $INIT_CWD
pwd

if [ "$EXT" = "ts" ]; then
  # oj test -c "ts-node main.ts" -d tests
  oj test -c "ts-node $INIT_CWD/main.ts" -d $INIT_CWD/tests
elif [ "$EXT" = "js" ]; then
  # oj test -c "node main.ts" -d tests
  oj test -c "node $INIT_CWD/main.ts" -d $INIT_CWD/tests
fi