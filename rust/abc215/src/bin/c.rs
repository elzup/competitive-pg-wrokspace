use itertools::Itertools;
use proconio::input;

fn sub() -> String {
    input! {
        s: String,
        k: usize,
    }

    let cs = s.chars();
    let list = cs.sorted().permutations(s.len());
    let hit = list.unique().take(k).last().unwrap();
    return hit.iter().collect::<String>();
}

fn main() {
    println!("{}", sub());
}
