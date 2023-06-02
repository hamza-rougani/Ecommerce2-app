<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class userResource extends JsonResource
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
            'name'=>$this->name,
            'email'=>$this->email,
            'Role'=>$this->Role,
            'address'=>$this->address,
            'numberphone'=>$this->numberphone,
            'city'=>$this->city,
            'Image'=>$this->Image,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
