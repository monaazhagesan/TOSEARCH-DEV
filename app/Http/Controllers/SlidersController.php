<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Slider;
use Intervention\Image\ImageManagerStatic as Image;

class SlidersController extends Controller
{
   public function index()
    {
        $sliders = Slider::orderBy('id','DESC');
        $sliders->when(request('s'), function ($q) {
            return $q->where(function ($query) {
                $query->where('title', 'like', "%" . trim(request('s')) . "%");
            });
        });
        $offset = (!empty(request('page'))) ? request('page') : 0;
        $sliders = $sliders->offset($offset)->paginate(20);
        return Inertia::render('Sliders/Admin/Index', [
            'sliders' => $sliders,
            'pagination' => array('total' => $sliders->total(), 'current' => $sliders->currentPage(), 'slidersize' => $sliders->perPage())
        ]);
    }
    public function edit($id)
    {
        $slider = Slider::find($id);
        return Inertia::render('Sliders/Admin/Edit', [
            'slider' => [
                'id' => $slider->id,
                'title' => $slider->title,
                'images' => $slider->images,
            ],
        ]);
    }
    public function update(Request $request, $id)
    {
        $slider = Slider::find($id);

$request->validate([
    'title' => ['required', 'max:50'],
    'images.*' => ['nullable'],
]);

$images = [];

// Handle new images
if ($request->hasFile('images')) {
    foreach ($request->file('images') as $image) {
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $destinationPath = public_path('/thumbnail/galleries');
        $img = Image::make($image->getRealPath());
        $img->resize(1500, 700, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath . '/' . $imageName);

        $images[] = "/thumbnail/galleries/" . $imageName;
    }
}

// 'oldimages' will either be an array or null
$oldImages = $request->oldimages;

// Check if 'oldimages' is an array before applying array_unique
if (is_array($oldImages)) {
    $oldImages = array_unique($oldImages);
    $images = array_merge($images, $oldImages);
}

$slider->update([
    'title' => $request->title,
    'images' => $images,
]);

// Flash message and redirect
$request->session()->flash('message', 'Slider updated successfully!');
return redirect()->route('sliders.index');
    }
}
