<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HallController extends Controller
{
  public function index() {
    return view('hall');
  }
}
