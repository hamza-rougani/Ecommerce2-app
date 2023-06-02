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
        Schema::create('catalogs', function (Blueprint $table) {
            $table->id('catalog_id');
            $table->string('img1');
            $table->string('img2');
            $table->string('img3');
            $table->string('img4');
            $table->string('img5');
            $table->string('img6');
            $table->string('img7');
            $table->string('img8');
            $table->foreignId('Pr1')->constrained()->on('products');
            $table->foreignId('Pr2')->constrained()->on('products');
            $table->foreignId('Pr3')->constrained()->on('products');
            $table->foreignId('Pr4')->constrained()->on('products');
            $table->foreignId('Pr5')->constrained()->on('products');
            $table->foreignId('Pr6')->constrained()->on('products');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catalogs');
    }
};
