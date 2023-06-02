<?php


use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\DemandResource;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\FilterController;
use App\Http\Controllers\DemandsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CatalogsController;
use App\Http\Controllers\GeneraleController;
use App\Http\Controllers\TableUserController;
use App\Http\Controllers\TableProduct2Controller;

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
    Route::apiResource('/catalogs', CatalogsController::class );
    Route::apiResource('/product2', TableProduct2Controller::class );
    Route::get('/DetailsOrders/{id}', function($id){
        return DemandResource::collection(  
            Orders::query()
            ->join('Products', 'orders.product_id', '=', 'Products.id')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->where('orders.user_id','=',$id)->orderBy('orders.id_demand','desc')->paginate(9)
            // ->orderBy('id_demand','desc')->paginate(9)
        );
    } );

});


Route::post('/signup', [UserController::class ,'signup']);
Route::post('/login', [UserController::class ,'login']);
Route::get('/getProduct', [GeneraleController::class ,'getProduct']);
Route::get('/getCatalog', [GeneraleController::class ,'getCatalog']);
Route::get('/getProduct/{Product}', [GeneraleController::class ,'show']);
Route::get('/Products', [FilterController::class ,'SearchFilter']);
Route::get('/slideProducts', [GeneraleController::class ,'slideProducts']);
Route::get('/Product2', [GeneraleController::class ,'Product2']);
