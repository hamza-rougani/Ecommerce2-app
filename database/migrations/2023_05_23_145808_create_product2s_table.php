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
        Schema::create('product2s', function (Blueprint $table) {
            $table->id('id_Pr2');
            $table->string('ImgPr1');
            $table->string('ImgPr2');
            $table->foreignId('Pr')->constrained()->on("products");
            $table->foreignId('Pr1')->constrained()->on("products");
            $table->foreignId('Pr2')->constrained()->on("products");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product2s');
    }
};
