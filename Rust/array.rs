fn main() {
    let mut array: Vec<i32> = Vec::new();

    let start_at = std::time::Instant::now();
    for i in 0..100_000_000 {
        array.push(i);
    }

    println!("{}", array.len());
    println!("{:?}", start_at.elapsed());
}