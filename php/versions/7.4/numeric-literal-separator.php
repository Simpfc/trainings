<?php

1_000_000_000  // int
6.674_083e-11; // float
299_792_458;   // decimal
0xCAFE_F00D;   // hexadecimal
0b0101_1111;   // binary
0137_041;      // octal


$unformattedNumber = 107925284.88;
$formattedNumber1 = 107_925_284.88;
$formattedNumber2 = 6.674_083e-11;

var_dump($formattedNumber1);  // float(107925284.88)
var_dump($formattedNumber2);  // float(6.674083E-11)




