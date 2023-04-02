<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Http\Resources\ProductResource;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProductResource::collection(
            Products::query()->orderBy('id','desc')->paginate(9)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request)
    {
        $data=$request->validated();
        $data['user_id']=auth()->id();
        if($request->hasFile('ImgB')){
            $data['ImgB'] = $request->file('ImgB')->store('images','public');
        }
        if($request->hasFile('Img1')){
            $data['Img1'] = $request->file('Img1')->store('images','public');
        }
        if($request->hasFile('Img2')){
            $data['Img2'] = $request->file('Img2')->store('images','public');
        }
        if($request->hasFile('Img3')){
            $data['Img3'] = $request->file('Img3')->store('images','public');
        }
        if($request->hasFile('Img4')){
            $data['Img4'] = $request->file('Img4')->store('images','public');
        }
        $product = Products::create($data);
        return response(new ProductResource($product),201);
    }

    /**
     * Display the specified resource.
     */
    //should be type $product not $products
    public function show(Products $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, Products $product)
    {
        $data=$request->validated();

       if($request->hasFile('ImgB')){
            $data['ImgB'] = $request->file('ImgB')->store('images','public');
        }
        if($request->hasFile('Img1')){
            $data['Img1'] = $request->file('Img1')->store('images','public');
        }
        if($request->hasFile('Img2')){
            $data['Img2'] = $request->file('Img2')->store('images','public');
        }
        if($request->hasFile('Img3')){
            $data['Img3'] = $request->file('Img3')->store('images','public');
        }
        if($request->hasFile('Img4')){
            $data['Img4'] = $request->file('Img4')->store('images','public');
        } 
        $product->update($data);
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $product)
    {
        $product->delete();
        return response("",204);
    }
}
