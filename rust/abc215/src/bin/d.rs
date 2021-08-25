use std::cmp;
use std::collections::HashMap;

use num::integer::gcd;
use proconio::input;

fn main() {
    input! {
        n: usize,
        m: usize,
        a: [usize;n]
    }
    let mut memo = HashMap::new();
    let mut res: Vec<usize> = vec![];

    for k in 1..m {
        if a.iter().all(|&ai| {
            let key = format!("{}_{}", cmp::min(ai, k), cmp::max(ai, k));

            match memo.get(&key) {
                Some(v) => *v,
                None => {
                    let av = gcd(ai, k) == 1;
                    memo.insert(key, av);
                    av
                }
            }
        }) {
            res.push(k);
        }
    }
    println!("{}", res.len());
    for v in res {
        println!("{}", v);
    }
}
