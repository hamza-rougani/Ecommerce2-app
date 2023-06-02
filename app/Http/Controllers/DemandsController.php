<?php

namespace App\Http\Controllers;
use App\Models\Orders;
use App\Http\Resources\DemandResource;
use App\Http\Requests\StoreDemandRequest;
use App\Http\Requests\UpdateDemandRequest;
use App\Http\Resources\OrderStatusResource;

class DemandsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DemandResource::collection(
            Orders::all()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDemandRequest $request)
    {
        $data = $request->validated();
           $data['user_id']=auth()->id();
           $order= Orders::create($data);
        return response(new DemandResource($order),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Orders $orders)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDemandRequest $request,Orders $order)
    {
        $data=$request->validated();
        $order->update($data);
        return response($order);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orders $orders)
    {
        //
    }
}
