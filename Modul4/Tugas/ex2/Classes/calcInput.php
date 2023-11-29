<?php
namespace CalcClasses;
include "./Classes/AbstractTemplate.php";
use CalcAbstract;

class CalcInput extends CalcAbstract
{
    public function getOperasi()
    {
        echo "Operasi apa yang anda inginkan?(masukan opsi angka)\n";
        echo "1. Penambahan\n";
        echo "2. pengurangan\n";
        echo "3. Perkalian\n";
        echo "4. pembagian\n";
        return $this->readInput();
    }

    public function getNumbers(){
        echo "Masukan angka pertama : ";
        $a = $this->readInput();
        echo "Masukan angka kedua : ";
        $b = $this->readInput();
        return [$a, $b];
    }

    protected function readInput(){
        return readline();
    }
}