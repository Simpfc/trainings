<?php
/**
 * Column addition
 * @param string $str
 *
 * @return string
 */
function sum_str_column($str)
{
    list($s1, $s2) = explode(' ', $str);
    $l1 = strlen($s1);
    $l2 = strlen($s2);

    $result = "";
    $rest = 0;

    for($i = 1; $i <= max($l1, $l2) + 1; $i++) {
        $d1 = $l1 - $i >= 0 ? (int) $s1[$l1 - $i] : 0;
        $d2 = $l2 - $i >= 0 ? (int) $s2[$l2 - $i] : 0;

        $sum = $d1 + $d2 + $rest;
        $rest = intval($sum > 9);
        if ($sum > 9) {
            $result .= $sum % 10;
            continue;
        }
        $result .= $sum;
    }

    return strrev(rtrim($result, '0'));
}

function sum_str_bcmath($str = '')
{
    list($s1, $s2) = explode(' ', $str);
    return bcadd($s1, $s2);
}

function sum_str_gmp($str = '')
{
    list($s1, $s2) = explode(' ', $str);
    return bcadd($s1, $s2);
}

$expectedResult = '321642642446744073709551616';
$str = '9321321223372036854775808 312321321223372036854775808';

var_dump(sum_str_column($str) === $expectedResult);
echo "\n";
var_dump(sum_str_bcmath($str) === $expectedResult);
echo "\n";
var_dump(sum_str_gmp($str) === $expectedResult);
echo "\n";
