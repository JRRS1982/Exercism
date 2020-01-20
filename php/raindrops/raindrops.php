<?php

function raindrops($numbers){
  $result = null;
  if ($numbers % 3 == 0){
    $result .= "Pling";
  }
  if ($numbers % 5 == 0) {
    $result .= "Plang";
  }
  if ($numbers % 7 == 0) {
    $result .= "Plong";
  } 
  
  if ($numbers % 3 != 0 && $numbers % 5 != 0 && $numbers % 7 !=0) {
    $result .= $numbers;
  }
  return $result;
}
