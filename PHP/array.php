<?php

$array = [];

$startAt = microtime(true);

for ($i = 0; $i < 100_000_000; $i++) {
    $array[] = $i;
}

$endAt = microtime(true);

echo count($array) . PHP_EOL;
echo ($endAt - $startAt) . PHP_EOL;
?>
