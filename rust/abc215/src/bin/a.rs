use proconio::input;

fn sub() -> String {
    input! {
        s: String,
    }
    return if s.eq("Hello,World!") {
        "AC".to_string()
    } else {
        "WA".to_string()
    };
}

fn main() {
    println!("{}", sub());
}
