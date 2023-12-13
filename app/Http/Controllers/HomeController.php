<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\User;

class HomeController extends Controller
{

    protected $guard;
    
    public function __construct(StatefulGuard $guard)
    {
        $this->guard = $guard;
    }
    public function index()
    {
        return Inertia::render('Front/home', [
                'categories' => Category::paginate(10)
                    ->withQueryString()->through(fn ($category) => [
                        'id' => $category->id,
                        'name' => $category->name,
                        'description' =>  substr_replace($category->description, "..", 100),
                    ]),
                ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'mobile_no' => 'required',
            'password' => 'required',
        ]);
        $data['password'] = Hash::make($request['password']);
        $data['user_type'] = $request->input('user_type', 'Buyer');
        $user_id = User::create($data)->id;
        $request->session()->flash('message', 'User created successfully!');
        return Redirect::route('home.index');
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
   
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
        $request->session()->flash('message', 'You have loggedin Successfully!');
        return Redirect::route('home');
        }
  
        return redirect("home")->withSuccess('Oppes! You have entered invalid credentials');
    }

    public function logout(Request $request)
    {
        if (auth()->user() != null && (auth()->user()->user_type == 'Buyer' || auth()->user()->user_type == 'Seller')) {
            $redirect_route = 'home';
        } else {
            $redirect_route = 'home';
        }

        //User's Cart Delete
        if (auth()->user()) {
            //Cart::where('user_id', auth()->user()->id)->delete();
        }

        $this->guard->logout();

        $request->session()->invalidate();
        $request->session()->flash('message', 'You have loggedin Successfully!');
        return Redirect::route('home');
    }
}
