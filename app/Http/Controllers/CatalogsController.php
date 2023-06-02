<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use App\Http\Resources\CatalogResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreCatalogRequest;
use App\Http\Requests\UpdateCatalogRequest;

class CatalogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CatalogResource::collection(
            Catalog::query()->orderBy('catalog_id','desc')->paginate(9)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCatalogRequest $request)
    {
        $data=$request->validated();
        if($request->hasFile('img1')){
            $data['img1'] = $request->file('img1')->store('images','public');
        }
        if($request->hasFile('img2')){
            $data['img2'] = $request->file('img2')->store('images','public');
        }
        if($request->hasFile('img3')){
            $data['img3'] = $request->file('img3')->store('images','public');
        }
        if($request->hasFile('img4')){
           $data['img4'] = $request->file('img4')->store('images','public');
       }
        if($request->hasFile('img5')){
            $data['img5'] = $request->file('img5')->store('images','public');
        } 
        
        if($request->hasFile('img6')){
            $data['img6'] = $request->file('img6')->store('images','public');
        } 
        if($request->hasFile('img7')){
            $data['img7'] = $request->file('img7')->store('images','public');
        } 
        if($request->hasFile('img8')){
            $data['img8'] = $request->file('img8')->store('images','public');
        } 
        
        $Catalog = Catalog::create($data);
        return response(new CatalogResource($Catalog),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Catalog $catalog)
    {
        return new CatalogResource($catalog);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCatalogRequest $request, Catalog $catalog)
    {
        $data=$request->validated();

        // if($request->hasFile('imgB')){
        //      $data['imgB'] = $request->file('ImgB')->store('images','public');
        //  }
        //  if($request->hasFile('img1')){
        //      $data['img1'] = $request->file('Img1')->store('images','public');
        //  }
        //  if($request->hasFile('img2')){
        //      $data['img2'] = $request->file('img2')->store('images','public');
        //  }
        //  if($request->hasFile('img3')){
        //      $data['img3'] = $request->file('img3')->store('images','public');
        //  }
        //  if($request->hasFile('img4')){
        //     $data['img4'] = $request->file('img4')->store('images','public');
        // }
        //  if($request->hasFile('img5')){
        //      $data['img5'] = $request->file('img5')->store('images','public');
        //  } 
         
        //  if($request->hasFile('img6')){
        //      $data['img6'] = $request->file('img6')->store('images','public');
        //  } 
        //  if($request->hasFile('img7')){
        //      $data['img7'] = $request->file('img7')->store('images','public');
        //  } 
        //  if($request->hasFile('img8')){
        //      $data['img8'] = $request->file('img8')->store('images','public');
        //  } 
        if($request->hasFile('img1')){
            $data['img1'] = $request->file('img1');
            $image1 = $request->file('img1');
            $path = Storage::disk('public')->put('images', $image1);
        }
        if($request->hasFile('img2')){
            $data['img2'] = $request->file('img2');
            $image2 = $request->file('img2');
            $path = Storage::disk('public')->put('images', $image2);
        }
        if($request->hasFile('img3')){
            $data['img3'] = $request->file('img3');
            $image3 = $request->file('img3');
            $path = Storage::disk('public')->put('images', $image3);
        }
        if($request->hasFile('img4')){
            $data['img4'] = $request->file('img4');
            $image4 = $request->file('img4');
            $path = Storage::disk('public')->put('images', $image4);
        }
        if($request->hasFile('img5')){
            $data['img5'] = $request->file('img5');
            $image5 = $request->file('img5');
            $path = Storage::disk('public')->put('images', $image5);
        }
        if($request->hasFile('img6')){
            $data['img6'] = $request->file('img6');
            $image6 = $request->file('img6');
            $path = Storage::disk('public')->put('images', $image6);
        }
        if($request->hasFile('img7')){
            $data['img7'] = $request->file('img7');
            $image7 = $request->file('img7');
            $path = Storage::disk('public')->put('images', $image7);
        }
        if($request->hasFile('img8')){
            $data['img8'] = $request->file('img8');
            $image8 = $request->file('img8');
            $path = Storage::disk('public')->put('images', $image8);
        }
        
         $catalog->update($data);
         return new CatalogResource($catalog);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Catalog $catalog)
    {
        $catalog->delete();
        return response("",204);
    }
}
