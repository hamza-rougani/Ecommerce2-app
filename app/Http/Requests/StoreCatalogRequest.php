<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCatalogRequest extends FormRequest
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
            "img1"=>'required|image|max:2048',
            "img2"=>'required|image|max:2048',
            "img3"=>'required|image|max:2048',
            "img4"=>'required|image|max:2048',
            "img5"=>'required|image|max:2048',
            "img6"=>'required|image|max:2048',
            "img7"=>'required|image|max:2048',
            "img8"=>'required|image|max:2048',
            "Pr1"=>'required|integer',
            "Pr2"=>'required|integer',
            "Pr3"=>'required|integer',
            "Pr4"=>'required|integer',
            "Pr5"=>'required|integer',
            "Pr6"=>'required|integer',
        ];
    }
}
