<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public static $wrap=false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'description'=>$this->description,
            'quantity'=>$this->quantity,
            'category'=>$this->category,
            'price'=>$this->price,
            'Shipping'=>$this->Shipping,
            'user_id'=>$this->user_id,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
            'ImgB'=>$this->ImgB,
            'Img1'=>$this->Img1,
            'Img2'=>$this->Img2,
            'Img3'=>$this->Img3,
            'Img4'=>$this->Img4,
            
        ];
    }
}
