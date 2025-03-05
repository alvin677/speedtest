# speedtest
Language performance tests to compare speeds.

# Tests
The Python and Javascript tests were done on an AMD Ryzen 5 PRO 5650U (w. Radeon Graphics)<br/>
Rust test was done on Rust's playground on their website (with release build for max optimization).

## Array
The array tests use a for loop from 0 to 100_000_000 and push to an array.

**Python** ~6-7 seconds<br/>
**Javascript (Deno)** ~1 second<br/>
**Rust** ~0.3 seconds<br/>

Winner: **Rust**


