<?php

function from($input)
{
    $date = new DateTime($input);
    
    $result = date_format($input, "Y/m/d H:i:s");
    
    return new DateTimeImmutable($result);
    
    return date_add($result, 1^9);
}