use proconio::input;

fn solve() -> usize {
    input! {
        n: usize,
        a: [usize; n],
    }
    let mut low1 = 0;
    let mut low2 = 0;
    let mut low1n = 0;
    let mut low2n = 0;

    for i in 0..n {
        let v = a[i];
        if v >= low1 {
            low2 = low1;
            low2n = low1n;
            low1 = v;
            low1n = i + 1;
        } else if v > low2 {
            low2 = v;
            low2n = i + 1;
        }
    }
    // println!("{}", low2);

    return low2n;
}

fn main() {
    println!("{}", solve());
}
