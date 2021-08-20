use proconio::input;

fn sub() -> u32 {
    input! {
        n: u32,
    }
    if n <= 125 {
        return 4;
    }
    if n <= 211 {
        return 6;
    }
    return 8;
}

fn main() {
    println!("{}", sub());
}
