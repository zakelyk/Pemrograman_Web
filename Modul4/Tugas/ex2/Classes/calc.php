<?php

namespace CalcClasses;

use CalcTrait\TraitKalkulator;

class Calc{
    use TraitKalkulator;
    public function hitung(){
        $calcInput = new CalcInput();
        $operasi = $calcInput->getOperasi();
        list($angka1, $angka2)= $calcInput->getNumbers();
        switch($operasi){
            case "1":
                echo "Hasil penjumlahan : " . $this->tambah($angka1, $angka2) . "\n";
                break;
            case "2":
                echo "Hasil pengurangan : " . $this->kurang($angka1, $angka2) . "\n";
                break;
            case "3":
                echo "Hasil perkalian : " . $this->kali($angka1, $angka2) . "\n";
                break;
            case "4":
                echo "Hasil pembagian : " . $this->bagi($angka1, $angka2) . "\n";
                break;
            default:
                echo "operasi tidak di temukan";         
        }
    }
}
