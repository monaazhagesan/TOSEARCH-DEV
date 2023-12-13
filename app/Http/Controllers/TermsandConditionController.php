<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Page;

class TermsandConditionController extends Controller
{
    public function index()
    {
        return Inertia::render('Front/termsandcondition', 
            [
                'page_content' => \App\Models\Page::where('id', 2)->first()->pagecontent
            ]);
    }
}
