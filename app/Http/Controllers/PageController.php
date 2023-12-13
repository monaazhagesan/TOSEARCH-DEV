<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Page;

class PageController extends Controller
{
    public function index()
    {
        $pages = Page::orderBy('id','DESC');
        $pages->when(request('s'), function ($q) {
            return $q->where(function ($query) {
                $query->where('pagename', 'like', "%" . trim(request('s')) . "%");
            });
        });
        $offset = (!empty(request('page'))) ? request('page') : 0;
        $pages = $pages->offset($offset)->paginate(20);
        return Inertia::render('Page/Admin/Index', [
            'pages' => $pages,
            'pagination' => array('total' => $pages->total(), 'current' => $pages->currentPage(), 'pageSize' => $pages->perPage())
        ]);
    }

    public function edit($id)
    {
        $page = Page::find($id);
        return Inertia::render('Page/Admin/Edit', [
            'page' => [
                'id' => $page->id,
                'pagename' => $page->pagename,
                'pagecontent' => $page->pagecontent,
                'image' => $page->image,
            ],
        ]);
    }

    public function update(Request $request, $id)
    {
        $page = Page::find($id);
        $data = $request->validate([
            'pagename' => 'required',
            'pagecontent' => 'required',
            'image' => 'nullable',
        ]);
        $image = $page->image;
        $page->update(
            [
                'pagename' => $request->pagename,
                'pagecontent' => $request->pagecontent,
                'image' => $image,
            ]
        );

        $request->session()->flash('message', 'Page updated successfully!');
        return Redirect::route('pages.index', $id);
    }
}
