<?php

namespace App\Http\Controllers;

use App\Models\Product2;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Product2Resource;
use App\Http\Requests\StoreProduct2Request;
use App\Http\Requests\UpdateProduct2Request;

class TableProduct2Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Product2Resource::collection(
            Product2::query()->orderBy('id','desc')->paginate(7)
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProduct2Request $request)
    {
        $data = $request->validated();
        if($request->hasFile('ImgPr1')){
         $data['ImgPr1'] = $request->file('ImgPr1')->store('images','public');
        }
        if($request->hasFile('ImgPr2')){
         $data['ImgPr2'] = $request->file('ImgPr2')->store('images','public');
        }
        $last2 = DB::table('products')->orderBy('id', 'DESC')->first();
        $data['Pr'] =$last2->id;
        $p2 = Product2::create($data);
        return response(new Product2Resource($p2),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product2 $product2)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product2 $product2)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProduct2Request $request, Product2 $product2)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product2 $product2)
    {
        //
    }
}
