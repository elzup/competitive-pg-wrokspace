DIR=${INIT_CWD:=$(pwd)}
EXT=$(ls $DIR | grep main | sed -e 's/main\.//')

if [ "$EXT" = "ts" ]; then
  echo "ts"
  # oj test -c "ts-node main.ts" -d tests
  oj test -c "ts-node $DIR/main.ts" -d $DIR/tests
elif [ "$EXT" = "js" ]; then
  echo "js"
  # oj test -c "node main.ts" -d tests
  oj test -c "node $DIR/main.js" -d $DIR/tests
else
  echo "no match main.* file."
fi