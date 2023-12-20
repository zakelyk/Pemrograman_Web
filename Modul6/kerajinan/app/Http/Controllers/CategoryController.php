<?php

namespace App\Http\Controllers;

use App\Http\Requests\GenerateNewCategory;
use App\Http\Requests\UpdateCategory;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Models\Categories;
use Exception;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $queryData = Categories::all();
            $foramattedDatas = new CategoryCollection($queryData);
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
    public function store(GenerateNewCategory $request)//(Request $request)
    {
        $validatedRequest = $request->validated();
        try{
            $queryData = Categories::Create($validatedRequest);
            $foramattedDatas = new CategoryResource($queryData);
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
            $queryData = Categories::findOrFail($id);
            $foramattedData = new CategoryResource($queryData);
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
    public function update(UpdateCategory $request, string $id)
    {
        $validatedRequest = $request->validated();
        try{
            $queryData = Categories::findOrFail($id);
            $queryData->update($validatedRequest);
            // $queryData->update();
            $queryData->save();
            $foramattedDatas = new CategoryResource($queryData);
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
            $queryData = Categories::findOrFail($id);
            $queryData->delete();
            $foramattedDatas = new CategoryResource($queryData);
            return response()->json([
                "message" => "success",
                "data" =>$foramattedDatas
            ],200);
        } catch (Exception $e){
            return response()->json($e->getMessage(),400);
        }
    }
}
