<?php

/*
This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
convenience to get you started writing code faster.

Remove this comment before submitting your exercise.
*/

function distance(string $strandA, string $strandB) {
    $output = 0;
    $ArrayA = str_split($strandA);
    $ArrayB = str_split($strandB);
    $indexB = 0;
    if (strlen($strandA) != strlen($strandB)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }
    try {
        foreach ($ArrayA as $itemA) {
            if ($itemA != $ArrayB[$indexB]) {
                $output += 1;
            }
            $indexB += 1;
        }
        return $output;
    } catch (InvalidArgumentException $e) {
        echo $e->getMessage();
    }
}
