<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CatalogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "catalog_id"=>$this->catalog_id,
            "img1"=>$this->img1,
            "img2"=>$this->img2,
            "img3"=>$this->img3,
            "img4"=>$this->img4,
            "img5"=>$this->img5,
            "img6"=>$this->img6,
            "img7"=>$this->img7,
            "img8"=>$this->img8,
            "Pr1"=>$this->Pr1,
            "Pr2"=>$this->Pr2,
            "Pr3"=>$this->Pr3,
            "Pr4"=>$this->Pr4,
            "Pr5"=>$this->Pr5,
            "Pr6"=>$this->Pr6,
        ];
    }
}
