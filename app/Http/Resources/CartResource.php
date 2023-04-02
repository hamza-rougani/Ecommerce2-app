<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "ide"=>$this->ide,
            "quantityCart"=>$this->quantityCart,
            "product_id"=>$this->product_id,
            "user_id"=>$this->user_id,
            "title"=>$this->title,
            "description"=>$this->description,
            "quantity"=>$this->quantity,
            "category"=>$this->category,
            "price"=>$this->price,
            "Img1"=>$this->Img1,
            "Shipping"=>$this->Shipping,
            
            
        ];
    }
}
