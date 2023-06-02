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
        Schema::create('orders', function (Blueprint $table) {
            $table->id('id_demand');
            $table->float('total');
            $table->boolean('isConfirmed')->default(false);
            $table->string('Status');
            $table->foreignId('product_id')->constrained()->on('products')->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->on('users')->onDelete('cascade');
            $table->timestamps();
            $table->integer('Quantity_Order');
            $table->float('TotalShipping');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demands');
    }
};
