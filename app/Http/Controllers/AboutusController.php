<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Page;

class AboutusController extends Controller
{
    public function index()
    {
        return Inertia::render('Front/aboutus', 
            [
                'page_content' => \App\Models\Page::where('id', 1)->first()->pagecontent
            ]);
    }
}