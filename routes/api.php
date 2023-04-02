<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\DemandsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TableUserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [UserController::class ,'logout']);
    Route::apiResource('/users', TableUserController::class );
    Route::apiResource('/products', ProductController::class );
    Route::apiResource('/carts', CartsController::class );
    Route::apiResource('/orders', DemandsController::class );
    

});


Route::post('/signup', [UserController::class ,'signup']);
Route::post('/login', [UserController::class ,'login']);
