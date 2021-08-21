use proconio::*;

#[fastout]
fn main() {
    input! {
        n: usize,
        s:[u64;n],
        mut t:[u64;n],
    }
    for i in 0..(n * 2) {
        let ni: usize = (i + 1) % n;
        t[ni] = t[ni].min(t[i % n] + s[i % n]);
    }
    for v in t {
        println!("{}", v);
    }
}
