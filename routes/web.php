<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BusinessBuyerController;
use App\Http\Controllers\ProductListingController;
use App\Http\Controllers\TermsandConditionController;
use App\Http\Controllers\MyProfileController;
use App\Http\Controllers\SellerToolsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SlidersController;
use App\Http\Controllers\AboutusController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::post('/home/store',[HomeController::class, 'store'])->name('home.store');
Route::post('/home/login', [HomeController::class, 'login'])->name('home.login');
Route::get('/logout', [HomeController::class, 'logout'])->name('home.logout');

Route::get('/businessbuyer', [BusinessBuyerController::class, 'index'])->name('businessbuyer');
Route::get('/listingscategories', [ProductListingController::class, 'index'])->name('listingscategories');
Route::get('/listingsgridcategories', [ProductListingController::class, 'listingsgridcategories'])->name('listingsgridcategories');
Route::get('/listingdetails', [ProductListingController::class, 'listingdetails'])->name('listingdetails');
Route::get('/termsandcondition', [TermsandConditionController::class, 'index'])->name('termsandcondition');
Route::get('/aboutus', [AboutusController::class, 'index'])->name('aboutus');
Route::get('/myprofile', [MyProfileController::class, 'index'])->name('myprofile');
Route::get('/seller_dashboard', [SellerToolsController::class, 'seller_dashboard'])->name('seller_dashboard');
Route::get('/seller_my_profile', [SellerToolsController::class, 'seller_my_profile'])->name('seller_my_profile');

Route::get('/buy_leads', [SellerToolsController::class, 'buy_leads'])->name('buy_leads');
Route::get('/manageproducts', [SellerToolsController::class, 'manageproducts'])->name('manageproducts');
Route::get('/quick_add', [SellerToolsController::class, 'quick_add'])->name('quick_add');
Route::get('/edit_product', [SellerToolsController::class, 'edit_product'])->name('edit_product');
Route::get('/catalog_views', [SellerToolsController::class, 'catalog_views'])->name('catalog_views');
Route::get('/add_product', [SellerToolsController::class, 'add_product'])->name('add_product');

Route::resource('category', CategoryController::class);
Route::resource('subcategory', SubCategoryController::class);
Route::get('/pages',[PageController::class, 'index'])->name('pages.index');
Route::get('/pages/edit/{id}',[PageController::class, 'edit'])->name('pages.edit');
Route::post('/pages/update/{id}',[PageController::class, 'update'])->name('pages.update');
Route::get('/sliders',[SlidersController::class, 'index'])->name('sliders.index');
Route::get('/sliders/edit/{id}',[SlidersController::class, 'edit'])->name('sliders.edit');
Route::post('/sliders/update/{id}',[SlidersController::class, 'update'])->name('sliders.update');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
