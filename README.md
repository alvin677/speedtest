# speedtest
Language performance tests to compare speeds.

# Tests
See below for tests. Hardware might differ slightly between multiple tests but it should at least give you an overview of the language speeds.<br/>
Consider trying out yourself on your machine as well, see what results you can achieve.

## Array
The array tests use a for loop from 0 to 100_000_000 and push to an array.

**Hardware**<br/>
The Python and Javascript tests were done on an **AMD Ryzen 5 PRO 5650U** (w. Radeon Graphics)<br/>
Rust test was done on Rust's playground on their website (with release build for max optimization).

**Python** ~6-7 seconds<br/>
**Javascript (Deno)** ~1 second<br/>
**Rust** ~0.3 seconds<br/>

Winner: **Rust**


