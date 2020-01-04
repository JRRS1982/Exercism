<?php

/*
This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
convenience to get you started writing code faster.

Remove this comment before submitting your exercise.
*/

function distance(string $strandA, string $strandB) : int
{
    $output = 0;
    if ($strandA != $strandB) {
        $output += 1;
    }
    return $output;
}
