<?php

namespace App\Models;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Products extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'quantity',
        'category',
        'price',
        'Shipping',
        'user_id',
        'ImgB',
        'Img1',
        'Img2',
        'Img3',
        'Img4',
        
    ];

    //relationship with Cart 
    public function Cart(){
        return $this->hasMany(Cart::class,'product_id');
    }
}
