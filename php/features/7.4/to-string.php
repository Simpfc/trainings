<?php

class A {

    public function __toString()
    {
        throw new Exception('I am Exception!');
    }
}

$a = new A;

//PHP 7.1
//<br />
//<b>Fatal error</b>:  Method A::__toString() must not throw an exception, caught Exception: I am Exception! in <b>[...][...]</b> on line <b>0</b><br />
try {
    echo (string) $a;
} catch (Exception $exception) {
    echo $exception->getMessage();
}

//PHP 7.4
// out: I am Exception!
try {
    echo (string) $a;
} catch (Exception $exception) {
    echo $exception->getMessage();
}
