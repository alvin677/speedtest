# speedtest
Language performance tests to compare speeds.  
These tests are not done just to check which language you can optimize the furthest, but they are primarily designed to find the time it takes for different languages to do the same thing.  
For example; in some of our code examples you can optimize to static arrays instead of vectors, however that would not make the code equal between the different languages unless all languages use static arrays, and so on..

# Tests
See below for tests. Hardware might differ slightly between multiple tests but it should at least give you an overview of the language speeds.<br/>
Consider trying out yourself on your machine as well, see what results you can achieve.

## Array
<details>
<summary>The array tests use a for loop from 0 to 100_000_000 and push to an array.</summary>

### AMD Ryzen 5 PRO 5650U (w. Radeon Graphics) | Windows 10 v19045.5487
**Python**: ~6-7 seconds.<br/>
**Javascript (Deno)**: ~1.05 seconds.<br/>
**Javascript (Bun)**: ~0.56 seconds.<br/>
**Javascript (Node)**: ~1.6 seconds.<br/>
**Rust**: ~0.3 seconds.   *Rust test was done on Rust's playground on their website (with release build for max optimization)*<br/>

### Jonny's tests with an AMD Ryzen 5 5600X | Windows 10 v19045.5487
**Rust**: 175 - 193 - 199 (most common) - 200 ms
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
</details>

## Webserver (with no logic)
<details>
<summary>The webserver tests are about running a basic webserver in different languages</summary>
For C# we are using Kestrel, similar to this (but with way less features, so that it matches the code in the other languages): https://github.com/alvin677/JonCsWebServer  
For Rust we are using Actix.

### AMD Ryzen 5 5600X | Windows 10 v19045.5487

C# (.NET Core 8.0) Kestrel: Avg x req/s

### [Intel Xeon E5-2680 v4](https://ark.intel.com/content/www/us/en/ark/products/91754/intel-xeon-processor-e5-2680-v4-35m-cache-2-40-ghz.html)	| Linux debian 6.1.0-17-amd64 6.1.69-1 (2023-12-30) | Tests done using `k6`

C# (.NET Core 8.0) Kestrel: Avg ~180k req/s

Bun v1.1.38: Avg 56k req/s
```py
     data_received..................: 201 MB  6.7 MB/s
     data_sent......................: 135 MB  4.5 MB/s
     http_req_blocked...............: avg=66.62µs  min=1.9µs   med=3.78µs  max=162.8ms  p(90)=5.38µs  p(95)=6.23µs
     http_req_connecting............: avg=57.74µs  min=0s      med=0s      max=162.63ms p(90)=0s      p(95)=0s
     http_req_duration..............: avg=21.82ms  min=1.76ms  med=21.57ms max=149.59ms p(90)=26.2ms  p(95)=27.79ms
       { expected_response:true }...: avg=21.82ms  min=1.76ms  med=21.57ms max=149.59ms p(90)=26.2ms  p(95)=27.79ms
     http_req_failed................: 0.00%   0 out of 1688682
     http_req_receiving.............: avg=98.34µs  min=11.46µs med=23.58µs max=37.13ms  p(90)=37.07µs p(95)=107.42µs
     http_req_sending...............: avg=102.51µs min=5.18µs  med=9.41µs  max=52.36ms  p(90)=20.34µs p(95)=44.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=21.62ms  min=1.72ms  med=21.46ms max=149.39ms p(90)=25.96ms p(95)=27.35ms
     http_reqs......................: 1688682 56208.587383/s
     iteration_duration.............: avg=42.37ms  min=21.89ms med=41.84ms max=245.76ms p(90)=47.02ms p(95)=49.17ms
     iterations.....................: 1688682 56208.587383/s
     vus............................: 2400    min=2400         max=2400
     vus_max........................: 2400    min=2400         max=2400


running (0m30.0s), 0000/2400 VUs, 1688682 complete and 0 interrupted iterations
```

Deno v2.1.4: Avg 38k req/s
```py
     data_received..................: 158 MB  5.3 MB/s
     data_sent......................: 92 MB   3.1 MB/s
     http_req_blocked...............: avg=425.75µs min=1.92µs   med=3.87µs  max=3.04s    p(90)=5.66µs  p(95)=6.54µs
     http_req_connecting............: avg=410.21µs min=0s       med=0s      max=3.04s    p(90)=0s      p(95)=0s
     http_req_duration..............: avg=21.87ms  min=170.08µs med=21.39ms max=236.91ms p(90)=27.4ms  p(95)=29.95ms
       { expected_response:true }...: avg=21.87ms  min=170.08µs med=21.39ms max=236.91ms p(90)=27.4ms  p(95)=29.95ms
     http_req_failed................: 0.00%   0 out of 1147027
     http_req_receiving.............: avg=79.55µs  min=11.82µs  med=25.74µs max=147.48ms p(90)=39.72µs p(95)=59.71µs
     http_req_sending...............: avg=58.2µs   min=5.28µs   med=9.33µs  max=169.94ms p(90)=17.4µs  p(95)=38.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=21.73ms  min=80.57µs  med=21.31ms max=236.81ms p(90)=27.21ms p(95)=29.55ms
     http_reqs......................: 1147027 38155.124244/s
     iteration_duration.............: avg=62.51ms  min=40.32ms  med=61.55ms max=3.11s    p(90)=67.71ms p(95)=70.49ms
     iterations.....................: 1147027 38155.124244/s
     vus............................: 2400    min=2400         max=2400
     vus_max........................: 2400    min=2400         max=2400


running (0m30.1s), 0000/2400 VUs, 1147027 complete and 0 interrupted iterations
```
</details>
