<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function signup(SignupRequest $request){
        $data = $request->validated();
        $user=User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password']),
            'address'=>$data['address'],
            'numberphone'=>$data['numberphone'],
            'city'=>$data['city'],
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user'=>$user,
            'token'=>$token
        ]);
    }
    public function login(LoginRequest $request){
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message'=>'Provided email or password is incorrect'
            ]);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user'=>$user,
            'token'=>$token
        ]);
    }
    public function logout(Request $request){
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }
 }
