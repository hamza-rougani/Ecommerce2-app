<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DemandResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
         return [
            "id_demand"=>$this->id_demand,
            "total"=>$this->total,
            "isConfirmed"=>$this->isConfirmed,
            "Status"=>$this->Status,
            "product_id"=>$this->product_id,
            "user_id"=>$this->user_id,
            "created_at"=>$this->created_at->format("Y-m-d  H:m:s"),
            "Quantity_Order"=>$this->Quantity_Order,
            "TotalShipping"=>$this->TotalShipping,
            //product Info
            "title"=>$this->title,
            "price"=>$this->price,
            "Shipping"=>$this->Shipping,
            "ImgB"=>$this->ImgB,
            "description"=>$this->description,
            "category"=>$this->category,
            //user Info
            "name"=>$this->name,
            "email"=>$this->email,
            "address"=>$this->address,
            "numberphone"=>$this->numberphone,

             
            
            
            
        ];
    }
}
