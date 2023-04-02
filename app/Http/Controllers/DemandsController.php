<?php

namespace App\Http\Controllers;

use App\Models\Demand;
use App\Http\Resources\DemandResource;
use App\Http\Requests\StoreDemandRequest;
use App\Http\Requests\UpdateDemandRequest;

class DemandsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DemandResource::collection(
            Demand::query()->orderBy('id','desc')->paginate(9)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDemandRequest $request)
    {
        $data = $request->validated();
        $id = DB::table('demands')->increment('id_demand');
           $data['user_id']=auth()->id();
           $order= Demand::create($data);
        return response(new DemandResource($order),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Demand $demand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDemandRequest $request, Demand $demand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Demand $demand)
    {
        //
    }
}
