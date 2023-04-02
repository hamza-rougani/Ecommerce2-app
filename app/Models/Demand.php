<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demand extends Model
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
         
    ];
}
