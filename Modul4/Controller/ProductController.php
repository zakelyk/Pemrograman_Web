<?php
namespace Controller;

include "Traits/ResponseFormatter.php";
include "Controller/Controller.php";

use Traits\ResponseFormatter;

//DISTIMULASIKAN INI ADALAH CLASS CONTROLLER PRODUCT
class ProductController extends Controller
{
    //gunakan trait yang sudah dibuat
    use ResponseFormatter;

    //MAGIC METHOD, Method ini akan di akses pada saat pembuatan object.
    public function __construct()
    {
        //SET ATRIBUT controllerName PADA PARENT CLASS CONTROLLER
        $this->controllerName = "GET ALL PRODUCT";
        //SET ATRIBUT controllerMethod PADA PARENT CLASS CONTROLLER
        $this->controllerMethod = "GET";
    }

    public function getAllProduct()
    {
        $dummyData = [
            "AIR MINERAL",
            "KEBAB",
            "SPAGHETI",
            "Jus Jambu",
        ];

        $response = [
            "controller_attribut" => $this->getControllerAttribut(),
            "product" => $dummyData
        ];

        //gunakan method dari trait yang sudah dibuat
        return $this->responseFormatter(200, "Success", $response);
    }
}
?>