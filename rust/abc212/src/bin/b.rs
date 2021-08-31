use proconio::input;

fn solve() -> String {
    input! {
        s: String,
    }

    let x = s
        .chars()
        .map(|c| c.to_digit(10).unwrap())
        .collect::<Vec<_>>();

    if x[0] == x[1] && x[0] == x[2] && x[0] == x[3] {
        return "Weak".to_string();
    }
    if (x[0] + 1) % 10 == x[1] && (x[1] + 1) % 10 == x[2] && (x[2] + 1) % 10 == x[3] {
        return "Weak".to_string();
    }
    return "Strong".to_string();
}

fn main() {
    println!("{}", solve());
}
