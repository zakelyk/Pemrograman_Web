<?php

namespace MyNamespace\Classes;

use MyNamespace\Traits\CalculatorTrait;

include "./Traits/CalculatorTrait.php";
include "./Classes/AbstractCalculator.php";

class BasicCalculator extends AbstractCalculator
{
    use CalculatorTrait;

    public function calculate($a, $b)
    {
        // Misalnya, kita gunakan metode penjumlahan dari trait
        return $this->add($a, $b);
    }
}

?>
