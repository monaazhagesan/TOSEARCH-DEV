<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;

class CategoryController extends Controller
{
     public function index()
    { 
        $categories = Category::orderBy('id','DESC');
        $categories->when(request('s'), function ($q) {
            return $q->where(function ($query) {
                $query->where('name', 'like', "%" . trim(request('s')) . "%");
            });
        });
        $offset = (!empty(request('page'))) ? request('page') : 0;
        $categories = $categories->offset($offset)->paginate(20);
        return Inertia::render('Category/index', [
            'categories' => $categories,
            'pagination' => array('total' => $categories->total(), 'current' => $categories->currentPage(), 'pageSize' => $categories->perPage())
        ]);
    }

    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Category/create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);
        $category_id = Category::create($data)->id;
        $request->session()->flash('message', 'Category created successfully!');
        return Redirect::route('category.index');
    }

    public function edit(Category $category)
    {
        $categories = Category::get();
        return Inertia::render('Category/edit', [
            'category' => $category,
            'categories' => $categories
        ]);
    }
    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);
        $category->update(['name' => $request->name, 'description' => $request->description]);
        $request->session()->flash('message', 'Category updated successfully!');
        return Redirect::route('category.index');
    }


    public function destroy(Category $category, Request $request)
    {
        $category->delete();
        $request->session()->flash('message', 'Category deleted successfully!');
        return Redirect::route('category.index');
    }
       
}
