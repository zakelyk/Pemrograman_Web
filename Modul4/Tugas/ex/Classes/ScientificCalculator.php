<?php

namespace MyNamespace\Classes;

use MyNamespace\Traits\CalculatorTrait;

class ScientificCalculator extends AbstractCalculator
{
    use CalculatorTrait;

    public function calculate($a, $b)
    {
        // Misalnya, kita gunakan metode perkalian dari trait
        return $a * $b;
    }

    // Tambahkan metode lain sesuai kebutuhan
}

?>
