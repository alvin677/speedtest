let array = [];

let startAt = Date.now();
for (let i = 0; i < 100_000_000; i++) {
    array.push(i);
}
let endAt = Date.now();

console.log(array.length);
console.log((endAt-startAt)/1000)