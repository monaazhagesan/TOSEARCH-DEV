<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class MyProfileController extends Controller
{
    public function index(User $user)
    {  
            $user = User::where('id', Auth::user()->id)->get();
             return Inertia::render('Front/myprofile', [
            'user' => $user ]);
    }
}
