<?php

namespace api\Models;

include "api/Config/DatabaseConfig.php";

use api\Config\DatabaseConfig;
use mysqli;

class Product extends DatabaseConfig
{
  public $con;

  public function __construct()
  {
    $this->con = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
    if ($this->con->connect_error) {
      die("Connection failed :" . $this->con->connect_error);
    }
  }

  public function findAll()
  {
    $sql = "SELECT products.product_name AS product_name, category.category_name AS category 
            FROM products
            JOIN category ON products.category = category.id";
    $result = $this->con->query($sql);
    $this->con->close();
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    return $data;
  }

  public function listCategory()
  {
    $sql = "SELECT category.category_name, GROUP_CONCAT(products.product_name) AS products
            FROM products
            JOIN category ON products.category = category.id
            GROUP BY category.category_name";

    $result = $this->con->query($sql);
    $this->con->close();
    
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $categoryName = $row['category_name'];
        $productNames = explode(',', $row['products']);
        $data[$categoryName] = $productNames;
    }

    return $data;
  }

  public function findById($id){
    $sql = "SELECT products.id, products.product_name, category.category_name AS category
            FROM products
            JOIN category ON products.category = category.id
            WHERE products.id = ?";
    $stmt = $this->con->prepare($sql);
    $stmt ->bind_param("i",$id);
    $stmt->execute();
    $result = $stmt->get_result();
    $this->con->close();
    $data =[];
    while ($row = $result->fetch_assoc()){
      $data[] = $row;
    }
    return $data;
  }
  public function findByName($name)
  {
    $sql = "SELECT products.product_name AS products, category.category_name AS category 
            FROM products
            JOIN category ON products.category = category.id
            WHERE products.product_name LIKE ?";
    
    $stmt = $this->con->prepare($sql);
    $param = "%" . $name . "%"; // Tambahkan wildcard (%) di depan dan belakang nama
    print($param);
    $stmt->bind_param("s", $param);
    $stmt->execute();
    
    $result = $stmt->get_result();
    $this->con->close();
    
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    
    return $data;
  }

  public function findByCategory($category_id)
  {
    $sql = "SELECT products.product_name AS products 
            FROM products
            JOIN category ON products.category = category.id
            WHERE category.id = ?";
    
    $stmt = $this->con->prepare($sql);
    $stmt->bind_param("s", $category_id);
    $stmt->execute();
    
    $result = $stmt->get_result();
    $this->con->close();
    
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    
    return $data;
  }

  public function create($data)
  {
    $productName = $data['product_name'];
    $categoryId = $data['category']; // Tambahkan input category_id

    $query = "INSERT INTO products (product_name, category) VALUES (?, ?)";
    $stmt = $this->con->prepare($query);
    $stmt->bind_param("ss", $productName, $categoryId); // Sesuaikan type binding dengan data

    $stmt->execute();
    $this->con->close();
  }


  public function update($data,$id){
    $productNAme = isset($data['product_name']) ? $data['product_name'] : null;
    $category = isset($data['category']) ? $data['category'] : null;
    $query = "UPDATE products SET ";
    $params = [];
    $bindTypes = "";
    if ($productNAme !== null) {
        $query .= "product_name = ?";
        $params[] = $productNAme;
        $bindTypes .="s";
    }

    if ($category !== null) {
        if ($productNAme !== null) {
            $query .= ", ";
        }
        $query .= "category = ?";
        $params[] = $category;
        $bindTypes .="s";

    }
    $bindTypes .= "i";

    $params[] = $id;
    $query .= " WHERE id = ?";
    $stmt = $this->con->prepare($query);
    // print($params);
    $stmt->bind_param($bindTypes, ...$params);
    $stmt->execute();
    $this->con->close();
  }

  public function destroy($id){
    $query = "DELETE FROM products WHERE id=?";
    $stmt = $this->con->prepare($query);
    $stmt->bind_param("i",$id);
    $stmt->execute();
    $this->con->close();
  }
}
