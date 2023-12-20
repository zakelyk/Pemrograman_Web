<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewItem;
use App\Http\Requests\UpdateItem;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Products;
use Exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $queryData = Products::all();
            $foramattedDatas = new ProductCollection($queryData);
            return response()->json([
                "message" => "success",
                "data" =>$foramattedDatas
            ],200);
        } catch (Exception $e){
            return response()->json($e->getMessage(),400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewItem $request)//(Request $request)
    {
        $validatedRequest = $request->validated();
        try{
            $queryData = Products::Create($validatedRequest);
            $foramattedDatas = new ProductResource($queryData);
            return response()->json([
                "message" => "success",
                "data" =>$foramattedDatas
            ],200);
        } catch (Exception $e){
            return response()->json($e->getMessage(),400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try{
            $queryData = Products::findOrFail($id);
            $foramattedData = new ProductResource($queryData);
            return response()->json([
                "message" => "success",
                "data" =>$foramattedData
            ],200);
        } catch (Exception $e){
            return response()->json($e->getMessage(),400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItem $request, string $id)
    {
        $validatedRequest = $request->validated();
        try{
            $queryData = Products::findOrFail($id);
            $queryData->update($validatedRequest);
            // $queryData->update();
            $queryData->save();
            $foramattedDatas = new ProductResource($queryData);
            return response()->json([
                "message" => "success",
                "data" =>$foramattedDatas
            ],200);
        } catch (Exception $e){
            return response()->json($e->getMessage(),400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $queryData = Products::findOrFail($id);
            $queryData->delete();
            $foramattedDatas = new ProductResource($queryData);
            return response()->json([
                "message" => "success",
                "data" =>$foramattedDatas
            ],200);
        } catch (Exception $e){
            return response()->json($e->getMessage(),400);
        }
    }
}
