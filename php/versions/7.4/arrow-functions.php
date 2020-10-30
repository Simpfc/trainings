<?php
class Foo {
    public $p1;
}

$var1 = 3;
$obj1 = new Foo();
$obj1->p1 = 2;

$afRes1 = (fn() => $var1 = $var1 + 1)();
$afRes2 = (fn() => $obj1->p1 = 3)();

/**
 * Working with scalar type
 */
var_dump($afRes1); // out: 4
var_dump($var1); // out: 3

/**
 * Working with references
 */
var_dump($afRes2); // out: 3
var_dump($obj1->p1); // out: 3


