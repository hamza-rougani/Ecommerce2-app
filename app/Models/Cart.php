<?php

namespace App\Models;

use App\Models\User;
use App\Models\Products;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cart extends Model
{
    use HasFactory;
    //for change default id Eloquent in laravel
    protected $primaryKey = 'ide';
    protected $fillable = [
        'ide',
        'quantityCart',
        'product_id', 
        'user_id',
         
    ];

//relationship To user 
public function user(){
    return $this->belongsTo(User::class,'user_id');
}
//relationship To product 
public function product(){
    return $this->belongsTo(Products::class,'product_id');
}
}
