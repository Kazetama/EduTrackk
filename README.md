# EduTrackk

**EduTrackk** adalah sistem absensi pintar berbasis **IoT** yang ditujukan untuk sekolah.  
Menggunakan kombinasi **ESP32 + RFID RC552** untuk perangkat absensi dan **Laravel 12 + Inertia.js + React + TailwindCSS** untuk aplikasi web, EduTrackk membantu sekolah mengelola kehadiran, kedisiplinan, hingga transparansi laporan ke orang tua secara digital.

---

## ✨ Fitur Utama
- **Absensi Otomatis** menggunakan kartu RFID dan ESP32
- **Dashboard Admin** untuk manajemen data siswa & guru
- **Sistem Poin Kenakalan** untuk mencatat pelanggaran dan kedisiplinan
- **Integrasi WhatsApp API** untuk notifikasi real-time ke orang tua
- **Laporan Kehadiran** dengan export ke Excel
- **UI Responsif** menggunakan TailwindCSS
- **Pengembangan Iteratif** dengan pendekatan prototyping

---

## 🛠 Teknologi yang Digunakan
- [Laravel 12](https://laravel.com/) – Framework backend
- [Inertia.js](https://inertiajs.com/) – Server-driven SPA
- [React (TSX)](https://react.dev/) – Library frontend
- [TailwindCSS](https://tailwindcss.com/) – Styling responsif
- [MySQL](https://www.mysql.com/) – Database
- **ESP32** – Mikrokontroler IoT
- **RFID RC552** – Perangkat absensi kartu

---

## ⚙️ Persyaratan
- PHP >= 8.2  
- Composer >= 2.x  
- Node.js >= 18.x & npm/yarn  
- MySQL/MariaDB  
- Git  

---

## 🚀 Instalasi

Clone repository:
```bash
git clone https://github.com/username/EduTrackk.git
cd EduTrackk
```

Install dependencies Laravel:
```bash
composer install
```

Install dependencies frontend:
```bash
npm install && npm run dev
```

Salin file environment:
```bash
cp .env.example .env
```

Generate app key:
```bash
php artisan key:generate
```

Migrasi database:
```bash
php artisan migrate
```

Jalankan server lokal:
```bash
php artisan serve
```

---

## 🔧 Konfigurasi `.env`

Contoh konfigurasi dasar:
```env
APP_NAME=EduTrackk
APP_ENV=local
APP_KEY=base64:xxxx
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=edutrackk
DB_USERNAME=root
DB_PASSWORD=
```

---

## 🗺️ Roadmap
- [ ] Setup project (Laravel + Inertia + React + Tailwind)
- [ ] Implementasi absensi dengan ESP32 + RFID
- [ ] Manajemen data siswa & guru
- [ ] Sistem poin kenakalan
- [ ] Integrasi WhatsApp API
- [ ] Modul laporan (export Excel)
- [ ] Sinkronisasi IoT & web
- [ ] Finalisasi & dokumentasi

---

## 🤝 Kontribusi
Kontribusi terbuka untuk siapa saja.  
Langkah kontribusi:
1. Fork repository ini  
2. Buat branch baru (`git checkout -b feature-anda`)  
3. Commit perubahan (`git commit -m 'Tambah fitur X'`)  
4. Push ke branch (`git push origin feature-anda`)  
5. Ajukan Pull Request  

---

## 📄 Lisensi
Proyek ini dirilis di bawah lisensi [MIT License](LICENSE).  
Bebas digunakan, dimodifikasi, dan didistribusikan dengan tetap mencantumkan atribusi.

---

## 🌍 Tentang EduTrackk
EduTrackk hadir sebagai solusi digitalisasi absensi sekolah yang sederhana namun efektif.  
Dengan menggabungkan **IoT + Web Integration**, EduTrackk tidak hanya mencatat kehadiran, tetapi juga membantu sekolah membangun transparansi, kedisiplinan, dan efisiensi administrasi.
