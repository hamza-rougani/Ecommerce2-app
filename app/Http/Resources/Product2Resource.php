<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Product2Resource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "ImgPr1"=>$this->ImgPr1,
            "ImgPr2"=>$this->ImgPr2,
            "Pr"=>$this->Pr,
            "Pr1"=>$this->Pr1,
            "Pr2"=>$this->Pr2,
            "title"=>$this->title,
            "description"=>$this->description,
            "price"=>$this->price,
            "Img1"=>$this->Img1,
            "Img2"=>$this->Img2,
            "Img3"=>$this->Img3,
            "Img4"=>$this->Img4,
            "Img5"=>$this->Img5,
            
            
            
        ];
    }
}
