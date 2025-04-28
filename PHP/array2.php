<?php

ini_set('memory_limit', '6G');

$array = new SplFixedArray(100_000_000);

$startAt = microtime(true);

for ($i = 0; $i < 100_000_000; $i++) {
    $array[$i] = $i;
}

$endAt = microtime(true);

echo $array->count() . PHP_EOL;
echo ($endAt - $startAt) . PHP_EOL;
?>
