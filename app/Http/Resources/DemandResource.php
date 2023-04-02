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
            "product_id"=>$this->product_id,
            "user_id"=>$this->user_id,
            "title"=>$this->title,
            "description"=>$this->description,
            "quantity"=>$this->quantity,
            "category"=>$this->category,
            "price"=>$this->price,
            "ImgB"=>$this->Img1,
            
            
        ];
    }
}
