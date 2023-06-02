<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    use HasFactory;
    protected $primaryKey = 'catalog_id';
    protected $fillable = [
      'img1',
      'img2',
      'img3',
      'img4',
      'img5',
      'img6',
      'img7',
      'img8',
      'Pr1',
      'Pr2',
      'Pr3',
      'Pr4',
      'Pr5',
      'Pr6',
    ];
}
