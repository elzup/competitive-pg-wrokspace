function main(input: string) {
  const lines = input.trim().split("\n");

  const [a, b, c] = lines[0].split(" ").map(Number);
  console.log({ a, b, c });
}

// const values = obj => Object.keys(obj).map(e => obj[e]);

const reader = s => {
  const lns = s.trim().split("\n");
  const ls = () => lns.shift();
  const as = () => ls().split(" ");
  const an = () => as().map(Number);
  return { lns, ls, as, an };
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
