<?php
// https://www.php.net/manual/ru/migration74.deprecated.php

1 ? 2 : 3 ? 4 : 5;   // deprecated
(1 ? 2 : 3) ? 4 : 5; // ok
1 ? 2 : (3 ? 4 : 5); // ok



$array = ['f' => 1, 's' => 2];
$idx = 'f';
$array[$idx] // ok
$array{$idx} // deprecated
