<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Subcategory;

class SubCategoryController extends Controller
{
     public function index()
    { 
        $subcategories = Subcategory::orderBy('id','DESC')->with('parent');
        $subcategories->when(request('s'), function ($q) {
            return $q->where(function ($query) {
                $query->where('name', 'like', "%" . trim(request('s')) . "%");
            });
        });
        $offset = (!empty(request('page'))) ? request('page') : 0;
        $subcategories = $subcategories->offset($offset)->paginate(20);
        return Inertia::render('Subcategory/index', [
            'subcategories' => $subcategories,
            'pagination' => array('total' => $subcategories->total(), 'current' => $subcategories->currentPage(), 'pageSize' => $subcategories->perPage())
        ]);
    }

    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Subcategory/create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'description' => 'required',
        ]);
        $subcategory_id = Subcategory::create($data)->id;
        $request->session()->flash('message', 'SubCategory created successfully!');
        return Redirect::route('subcategory.index');
    }
    public function edit(Subcategory $subcategory)
    {
        $categories = Category::get();
        return Inertia::render('Subcategory/edit', [
            'subcategory' => $subcategory,
            'categories' => $categories
        ]);
    }
    public function update(Request $request, Subcategory $subcategory)
    {
        $data = $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'description' => 'required',
        ]);

        $subcategory->update($data);
        $request->session()->flash('message', 'SubCategory updated successfully!');
        return Redirect::route('subcategory.index');
    }

    public function destroy(Subcategory $subcategory, Request $request)
    {
        $subcategory->delete();
        $request->session()->flash('message', 'SubCategory deleted successfully!');
        return Redirect::route('subcategory.index');
    }
}
