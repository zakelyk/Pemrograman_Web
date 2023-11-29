<?php
include "./Classes/BasicCalculator.php";
include "./Classes/ScientificCalculator.php";

spl_autoload_register(function ($class) {
    include 'src/' . str_replace('\\', '/', $class) . '.php';
});

use MyNamespace\Classes\BasicCalculator;
use MyNamespace\Classes\ScientificCalculator;

$basicCalculator = new BasicCalculator();
$result1 = $basicCalculator->calculate(5, 3);
echo "Hasil kalkulasi menggunakan Kalkulator Dasar: $result1\n";

$scientificCalculator = new ScientificCalculator();
$result2 = $scientificCalculator->calculate(5, 3);
echo "Hasil kalkulasi menggunakan Kalkulator Ilmiah: $result2\n";

?>
