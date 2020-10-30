<?php
$a = 123;
$b = 33;

echo "sum: " . $a + $b;
// For PHP < 7.4 will be the same as  echo("sum: " . $a) + $b;
// But PHP 7.4 will generate Warning
//<br />
//<b>Deprecated</b>:  The behavior of unparenthesized expressions containing both '.' and '+'/'-' will change in PHP 8: '+'/'-' will take a higher precedence in <b>[...][...]</b> on line <b>6</b><br />
//<br />
//<b>Warning</b>:  A non-numeric value encountered in <b>[...][...]</b> on line <b>6</b><br />
//33

// PHP 8
//echo "sum :" . ($a + $b); // sum :156

