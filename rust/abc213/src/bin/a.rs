use proconio::input;

fn solve() -> u32 {
    input! {
        a: u32,
        b: u32,
    }
    return a ^ b;
}

fn main() {
    println!("{}", solve());
}
