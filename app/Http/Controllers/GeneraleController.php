<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use App\Models\Product2;
use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Resources\CatalogResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\Product2Resource;

class GeneraleController extends Controller
{
    public function getProduct()
    {
        return ProductResource::collection(
            Products::query()->orderBy('id','desc')->paginate(20)
        );
    }
    public function show(Products $Product)
    {
        return new ProductResource($Product);
    }
    public function getCatalog()
    {
        return CatalogResource::collection(
            Catalog::query()->orderBy('catalog_id','desc')->paginate(9)
        );
    }
    public function slideProducts()
    {
        return ProductResource::collection(
            Products::query()->where('Type','=','slidecard')->orderBy('id','desc')->paginate(20)
        );
    }
    public function Product2()
    {
        return Product2Resource::collection(
            Product2::query()
            ->join('Products','product2s.Pr','=','Products.id')->paginate(20)
            // Product2::::query()
            // ->join('Products', 'orders.product_id', '=', 'Products.id')
                             
        );
    }

}
