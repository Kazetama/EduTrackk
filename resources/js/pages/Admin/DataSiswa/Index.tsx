import { Head, usePage, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import type { Siswa } from '@/types/models/siswa';
import type { Pagination } from '@/types/pagination';

interface DataSiswaProps {
    siswas: Pagination<Siswa>;
    [key: string]: unknown; // biar tetap kompatibel dengan PageProps Inertia
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Data Siswa', href: '/admin/data-siswa' },
];

export default function DataSiswa() {
    const { siswas } = usePage<DataSiswaProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Siswa" />
            <div className="p-4">
                <h1 className="text-lg font-bold mb-4">Data Siswa</h1>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full border-collapse text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">UID Kartu</th>
                                <th className="px-4 py-2 text-left">Nama</th>
                                <th className="px-4 py-2 text-left">NIS</th>
                                <th className="px-4 py-2 text-left">Kelas</th>
                                <th className="px-4 py-2 text-left">Poin</th>
                                <th className="px-4 py-2 text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {siswas.data.map((siswa: Siswa) => (
                                <tr key={siswa.id} className="border-t">
                                    <td className="px-4 py-2">{siswa.uid_kartu}</td>
                                    <td className="px-4 py-2">{siswa.nama ?? '-'}</td>
                                    <td className="px-4 py-2">{siswa.nis ?? '-'}</td>
                                    <td className="px-4 py-2">{siswa.kelas ?? '-'}</td>
                                    <td className="px-4 py-2">{siswa.poin}</td>
                                    <td className="px-4 py-2">
                                        <Link
                                            href={`/admin/data-siswa/${siswa.id}/edit`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
