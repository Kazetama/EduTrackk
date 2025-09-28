<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SiswaManagementController extends Controller
{
    /**
     * Tampilkan semua data siswa
     */
    public function index(Request $request)
    {
        $siswas = Siswa::latest()->paginate(10);

        return Inertia::render('Admin/DataSiswa/Index', [
            'siswas' => $siswas,
        ]);
    }

    /**
     * Tampilkan form edit siswa
     */
    public function edit($id)
    {
        $siswa = Siswa::findOrFail($id);

        return Inertia::render('Admin/DataSiswa/Edit', [
            'siswa' => $siswa,
        ]);
    }

    /**
     * Proses update siswa
     */
    public function update(Request $request, $id)
    {
        $siswa = Siswa::findOrFail($id);

        $validated = $request->validate([
            'nama'           => 'nullable|string|max:255',
            'gambar'         => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'nis'            => 'nullable|string|max:50',
            'poin'           => 'nullable|integer|min:0',
            'nomor_orangtua' => 'nullable|string|max:20',
            'alamat'         => 'nullable|string',
            'kelas'          => 'nullable|string|max:50',
        ]);

        // Handle upload gambar
        if ($request->hasFile('gambar')) {
            // simpan file ke storage/app/public/siswas
            $path = $request->file('gambar')->store('siswas', 'public');
            $validated['gambar'] = $path;
        }

        $siswa->update($validated);

        return redirect()
            ->route('admin.data-siswa') // pastikan route name sesuai di web.php
            ->with('success', 'Data siswa berhasil diperbarui!');
    }
}