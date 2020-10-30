<?php
// Init data
$data = [
    'amount' => 2222
];
// PHP5
//$data['date'] = isset($data['date']) && !empty($data['date']) ? $data['date'] : new DateTime();

// PHP 7.0+
$data['date'] = $data['date'] ?? new DateTime();

// PHP 7.4
$data['date'] ??= new DateTime();

$data['time'] = time();
$data['time'] ??= new DateTime();
var_dump($data);

