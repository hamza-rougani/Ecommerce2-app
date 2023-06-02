<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->String('title');
            $table->String('description');
            $table->String('sumi_description');
            $table->integer('quantity');
            $table->String('category');
            $table->String('price');
            $table->float('Shipping');
            $table->String('ImgB');
            $table->String('Img1');
            $table->String('Img2');
            $table->String('Img3');
            $table->String('Img4');
            $table->String('Type');
            $table->foreignId('user_id')->constrained()->on('users')->onDelete('cascade');
            $table->timestamps();
        });
       
     
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
