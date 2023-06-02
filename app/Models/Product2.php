<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product2 extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_Pr2';
    protected $fillable = [
        'ImgPr1',
        'ImgPr2',
        'Pr',
        'Pr1',
        'Pr2',
    ];
}
