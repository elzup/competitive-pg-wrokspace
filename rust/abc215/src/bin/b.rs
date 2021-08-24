use proconio::input;

fn solve() -> usize {
    let blen = |v: u64| -> usize { format!("{:b}", v).to_string().len() };

    input! {
        n: u64,
    }
    return blen(n) - 1;
}

fn main() {
    println!("{}", solve());
}
