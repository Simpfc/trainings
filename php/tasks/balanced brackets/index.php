<?php
function balanced($str)
{
    $stack = new SplStack();
    $braces = [
        '}' => '{',
        ')' => '(',
        ']' => '[',
    ];

    for($i = 0; $i < strlen($str); $i++) {
        $char = $str[$i];
        if (isset($braces[$char])) {
            $nextChar = $braces[$char];
            $el = $stack->pop();
            if ($el !== $nextChar) {
                return false;
            }
        } else {
            $stack->push($char);
        }
    }

    return true;
}

var_dump(balanced('{[()()()()]}') === true);
echo "\n";
var_dump(balanced('{[()()([)]()]}') === false);
echo "\n";