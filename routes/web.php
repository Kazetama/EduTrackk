<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiswaManagementController;
use Inertia\Inertia;

// Home
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Protected routes (auth + verified)
Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Admin routes
    Route::prefix('admin')->group(function () {
        Route::get('/data-siswa', [SiswaManagementController::class, 'index'])
            ->name('admin.data-siswa');
        Route::get('/data-siswa/{id}/edit', [SiswaManagementController::class, 'edit'])->name('admin.data-siswa.edit');
        Route::put('/data-siswa/{id}', [SiswaManagementController::class, 'update'])->name('admin.data-siswa.update');
    });
});

// Other routes
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
