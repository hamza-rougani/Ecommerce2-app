<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_demand';
    protected $fillable = [
        'id_demand',
        'total',
        'isConfirmed',
        'Status',
        'product_id', 
        'user_id',
        'Quantity_Order',
        'TotalShipping',
         
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
