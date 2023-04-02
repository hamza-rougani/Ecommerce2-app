<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title'=>'required|string|max:55',
            'description'=>'required',
            'quantity'=>'required|integer',
            'category'=>'required|string',
            'price'=>'required',
            'Shipping'=>'required',
            'ImgB'=>'required|image|max:2048',
            'Img1'=>'required|image|max:2048',
            'Img2'=>'required|image|max:2048',
            'Img3'=>'required|image|max:2048',
            'Img4'=>'required|image|max:2048',
            
        ];
    }
}
