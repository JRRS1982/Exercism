<?php

function distance(string $strandA, string $strandB) 
{
    $output = 0;
    $arrayA = str_split($strandA);
    $arrayB = str_split($strandB);

    if (strlen($strandA) !== strlen($strandB)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }

    foreach ($arrayA as $keyA => $valueA) {
        if ($valueA !== $arrayB[$keyA]) {
            $output++;
        }
    }

    return $output;
}
