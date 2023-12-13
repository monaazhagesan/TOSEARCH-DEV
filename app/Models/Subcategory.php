<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'description',
    ];
     protected $casts = [
        'category_id' => 'array',
    ];
    public function parent()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }
     public function user()
    {
        return $this->belongsTo(Category::class);
    }

}

