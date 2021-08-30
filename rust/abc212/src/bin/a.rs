use proconio::input;

fn sub() -> String {
    input! {
        a: usize,
        b: usize,
    }

    // 0<A かつ B=0 なら「純金」
    // A=0 かつ 0<B なら「純銀」
    // 0<A かつ 0<B なら「合金」
    if 0 < a && b == 0 {
        return "Gold".to_string();
    }
    if a == 0 && 0 < b {
        return "Silver".to_string();
    }

    return "Alloy".to_string();
}

fn main() {
    println!("{}", sub());
}
