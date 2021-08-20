use itertools::iproduct;
use proconio::input;

fn sub() -> u32 {
    input! {
        s: u32,
        t: u32,
    }
    let mut v: u32 = 0;

    for (a, b, c) in iproduct!(0..(s + 1), 0..(s + 1), 0..(s + 1)) {
        if a + b + c <= s && a * b * c <= t {
            v += 1
        }
    }
    return v;
}

fn main() {
    println!("{}", sub());
}
