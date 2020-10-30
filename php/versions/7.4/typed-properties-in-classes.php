<?php

class A
{
    public string $name;
    public ?int $amount;
    public ?Foo $foo;
    public ?Foo $fooWithDefault = null;
}

$a1 = new A();
$a1->name = 'Name';
$a1->amount = 5;
/**
 * object(A)#1 (2) {
    ["name"]=> string(4) "Name"
    ["amount"]=> int(5)
    ["foo"]=> uninitialized(?Foo)
    }
 */
var_dump($a1);

$a2 = new A();
// Fatal error:  Uncaught TypeError: Typed property A::$amount must be int or null string used
$a2->amount = 's';
$a2->name = 2;
var_dump($a2);


// Fatal error: Uncaught Error: Typed property A::$foo must not be accessed before initialization
var_dump($a1->foo);
var_dump(isset($a1->foo) ? $a1->foo : null); //  NULL
var_dump($a1->fooWithDefault); //  NULL




