<?php 

namespace api\Routes;

include "api/Controller/ProductController.php";

use api\Controller\ProductController;

class ProductRoutes{
  public function handle($method,$path){
    if($method === 'GET' && $path === '/api/product/'){
      $contoller = new ProductController();
      echo $contoller->index();
    }
    if($method === 'GET' && $path === '/api/category/'){
      $contoller = new ProductController();
      echo $contoller->indexCategory();
    }
    if($method === 'GET' && strpos($path, '/api/product/') === 0){
      $pathParts = explode('/',$path);
      $id = $pathParts[count($pathParts)-1];

      $contoller = new ProductController();
      echo $contoller->getById($id);
    }
    if($method === 'GET' && strpos($path, '/api/category/') === 0){
      $pathParts = explode('/',$path);
      $category_id = $pathParts[count($pathParts)-1];

      $contoller = new ProductController();
      echo $contoller->getByCategory($category_id);
    }
    if($method === 'POST' && $path === '/api/product/'){
      $contoller = new ProductController();
      echo $contoller->insert();
    }
    if($method === 'PUT' && strpos($path,'/api/product/')===0){
      $pathParts = explode('/',$path);
      $id = $pathParts[count($pathParts)-1];

      $contoller = new ProductController();
      echo $contoller->update($id);
    }
    if($method === 'DELETE' && strpos($path,'/api/product/')===0){
      $pathParts = explode('/',$path);
      $id = $pathParts[count($pathParts)-1];

      $contoller = new ProductController();
      echo $contoller->delele($id);
    }
  }
}
?>