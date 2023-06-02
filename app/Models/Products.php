<?php

namespace App\Models;

use App\Models\Cart;
use App\Models\Demand;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Products extends Model
{
    use HasFactory;
    protected $fillable = [
        'Type',
        'title',
        'description',
        'sumi_description',
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
//filter search
public function scopeFilter($query , $filters){
    if($filters['title'] ?? false){
        $query->where('title','like','%'.$filters['title'].'%')
        ->orwhere('description','like','%'.$filters['title'].'%')
        ->orwhere('category','like','%'.$filters['title'].'%');
    }
    if($filters['category'] ?? false){
        $query->where('category','like','%'.$filters['category'].'%');
    }
}
    //relationship with Cart 
    public function Cart(){
        return $this->hasMany(Cart::class,'product_id');
    }
    public function Order(){
        return $this->hasMany(Demand::class,'product_id');
    }
}
