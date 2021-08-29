use std::collections::{HashMap, HashSet};

use proconio::input;

fn solve() {
    input! {
        _h: usize, _w: usize, n: usize,
        ab: [(usize, usize); n]
    }

    // let mut aa = vec![0; n];
    // let mut bb = vec![0; n];
    let mut aa = HashSet::new();
    let mut bb = HashSet::new();
    // let mut bb = HashSet::new();
    let mut aabb = vec![];

    for &(a, b) in &ab {
        aa.insert(a);
        bb.insert(b);
        aabb.push((a, b));
    }
    for i in 0..n {
        println!("{} {}", aa.get(i), bb.get(i));
    }
    let aa2 = aa.into_iter().sorted();
    let bb2 = bb.into_iter().sorted();

    // invert key value
    let mut avk: HashMap<usize, usize> = HashMap::new();
    let mut bvk: HashMap<usize, usize> = HashMap::new();
    for i in 0..n {
        println!("{} {}", aa[i], bb[i]);
        avk.insert(aa[i], i);
        bvk.insert(bb[i], i);
    }
    for (a, b) in ab {
        // print!()
        println!(
            "{} {}",
            avk.get(&a).unwrap_or(&0),
            bvk.get(&b).unwrap_or(&0)
        );
    }
}

fn main() {
    solve();
}
