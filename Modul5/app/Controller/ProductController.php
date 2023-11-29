<?php

namespace app\Controller;
include "app/Traits/ApiResponseFormatter.php";
include "app/Models/Product.php";

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController{
    use ApiResponseFormatter;


    public function index(){
        $productModel = new Product();
        $response = $productModel->findall();
        return $this->apiResponse(200, "Success", $response);
    }

    public function getById($id){
        $productModel = new Product();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "Success", $response);
    }

    public function insert(){
        $jsonInput = file_get_contents('pjp://input');
        $inputData = json_decode($jsonInput, true);
        if(json_last_error()){
            return $this->apiResponse(400, "error invalid inpit", null);
        }

        $productModel = new Product();
        $response = $productModel->create([
            "product_name" => $inputData['product-name']
        ]);

        return $this->apiResponse(200, "Success", $response);
    }

    public function update($id){
        $jsonInput=file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        if(json_last_error()){
            return $this->apiResponse(400, "error invalid input");

            
        }
        $productModel = new Product();
        $response = $productModel->update(["product_name"=>$inputData['product_name']], $id);

        return $this->apiResponse(200, "success", $response);
    }

    public function delete($id){
        $productModel = new Product();
        $response = $productModel->destroy($id);

        return $this->apiResponse(200, "success", $response);
    }
}