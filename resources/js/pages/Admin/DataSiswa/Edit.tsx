import { Head, useForm, usePage, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import type { Siswa } from '@/types/models/siswa';

interface EditSiswaProps {
    siswa: Siswa;
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Data Siswa', href: '/admin/data-siswa' },
    { title: 'Edit Siswa', href: '#' },
];

export default function EditSiswa() {
    const { siswa } = usePage<EditSiswaProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        uid_kartu: siswa.uid_kartu || '',
        nama: siswa.nama || '',
        nis: siswa.nis || '',
        kelas: siswa.kelas || '',
        poin: siswa.poin || 0,
        nomor_orangtua: siswa.nomor_orangtua || '',
        gambar: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/admin/data-siswa/${siswa.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Siswa" />
            <div className="p-6">
                <h1 className="text-xl font-bold mb-6">Edit Data Siswa</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* UID Kartu */}
                    <div>
                        <label className="block text-sm font-medium mb-1">UID Kartu</label>
                        <input
                            type="text"
                            value={data.uid_kartu}
                            disabled
                            className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                    </div>

                    {/* Grid 2 kolom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Nama */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Nama</label>
                            <input
                                type="text"
                                value={data.nama}
                                onChange={(e) => setData('nama', e.target.value)}
                                className="w-full border rounded px-3 py-2"
                            />
                            {errors.nama && <p className="text-red-500 text-sm">{errors.nama}</p>}
                        </div>

                        {/* NIS */}
                        <div>
                            <label className="block text-sm font-medium mb-1">NIS</label>
                            <input
                                type="text"
                                value={data.nis}
                                onChange={(e) => setData('nis', e.target.value)}
                                className="w-full border rounded px-3 py-2"
                            />
                            {errors.nis && <p className="text-red-500 text-sm">{errors.nis}</p>}
                        </div>

                        {/* Kelas */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Kelas</label>
                            <input
                                type="text"
                                value={data.kelas}
                                onChange={(e) => setData('kelas', e.target.value)}
                                className="w-full border rounded px-3 py-2"
                            />
                            {errors.kelas && <p className="text-red-500 text-sm">{errors.kelas}</p>}
                        </div>

                        {/* Poin */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Poin</label>
                            <input
                                type="number"
                                value={data.poin}
                                onChange={(e) => setData('poin', Number(e.target.value))}
                                className="w-full border rounded px-3 py-2"
                            />
                            {errors.poin && <p className="text-red-500 text-sm">{errors.poin}</p>}
                        </div>

                        {/* Nomor Orangtua */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Nomor Orangtua</label>
                            <input
                                type="text"
                                value={data.nomor_orangtua}
                                onChange={(e) => setData('nomor_orangtua', e.target.value)}
                                className="w-full border rounded px-3 py-2"
                            />
                            {errors.nomor_orangtua && (
                                <p className="text-red-500 text-sm">{errors.nomor_orangtua}</p>
                            )}
                        </div>
                    </div>

                    {/* Upload Gambar */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Foto</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setData('gambar', e.target.files && e.target.files[0] ? e.target.files[0] : null)
                            }
                            className="w-full border rounded px-3 py-2"
                        />
                        {siswa.gambar && (
                            <div className="mt-3 flex items-center gap-4">
                                <img
                                    src={`/storage/${siswa.gambar}`}
                                    alt="Foto siswa"
                                    className="h-20 w-20 object-cover rounded border"
                                />
                                <p className="text-sm text-gray-600">Foto saat ini</p>
                            </div>
                        )}
                        {errors.gambar && <p className="text-red-500 text-sm">{errors.gambar}</p>}
                    </div>

                    {/* Tombol */}
                    <div className="flex items-center justify-end gap-3">
                        <Link
                            href="/admin/data-siswa"
                            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
