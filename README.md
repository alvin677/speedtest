# speedtest
Language performance tests to compare speeds.

# Tests
See below for tests. Hardware might differ slightly between multiple tests but it should at least give you an overview of the language speeds.<br/>
Consider trying out yourself on your machine as well, see what results you can achieve.

## Array
The array tests use a for loop from 0 to 100_000_000 and push to an array.

### AMD Ryzen 5 PRO 5650U (w. Radeon Graphics) | Windows 10 v19045.5487
**Python**: ~6-7 seconds.<br/>
**Javascript (Deno)**: ~1.05 seconds.<br/>
**Javascript (Bun)**: ~0.56 seconds.<br/>
**Rust**: ~0.3 seconds.   *Rust test was done on Rust's playground on their website (with release build for max optimization)*<br/>

### Jonny's tests with an AMD Ryzen 5 5600X | Windows 10 v19045.5487
**Rust**: - 175 - 193 - 199 (most common) - 200 ms
#### C++ x86

array.exe:
- 200 - 600 ns on release build
- <60 ms on debug build

vector.exe:
- ~280 ms on release build

#### C#
array.exe:
- 115 ms

array_parallel.exe:
- 86 ms - 91 ms

list.exe: (`List<int>` = a dynamic array list)
- 350 - 420 ms

#### JS
Chrome browser v133.0.0.0:
- 605 ms - 713 ms

NodeJS v18.7.0:
- 1580 ms - 1600 ms

Deno v2.2.3:
- 781 ms - 791 ms

Bun v1.2.4:
- 472 ms - 481 ms

### Python v3.13.2
- 5.66 - 6.1 (most cases) - 7.1 s
