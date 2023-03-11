<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function show()
    {
        $schedules = DB::table('schedules')->get();
        $packages = DB::table('packages')->get();
        $instructors = DB::table('instructors')->get();
        $cars = DB::table('cars')->get();

        return Inertia::render('HomePage', [
            'schedules' => $schedules,
            'packages' => $packages,
            'instructors' => $instructors,
            'cars' => $cars,
        ]);
    }
}
