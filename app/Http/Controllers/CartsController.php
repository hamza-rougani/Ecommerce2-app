<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\CartResource;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CartResource::collection(
            Cart::query()
            ->join('Products', 'carts.product_id', '=', 'Products.id')
            ->where('carts.user_id','=',auth()->id())->paginate(9)
            
           );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartRequest $request)
    {
        $data = $request->validated();
        $id = DB::table('carts')->increment('ide');
           $data['user_id']=auth()->id();
           $cart= Cart::create($data);
        return response(new CartResource($cart),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        $data=$request->validated();
        $cart->update($data);
        return response($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $cart->delete();
        return response("",204);
    }
}
