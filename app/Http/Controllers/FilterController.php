<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;

class FilterController extends Controller
{
    public function SearchFilter(Request $request){
        return ProductResource::collection(
            Products::latest()->filter(request(['title','category']))->get()
        );
   
    }
}
