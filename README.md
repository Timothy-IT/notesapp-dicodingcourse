# Notes App

Aplikasi Notes sederhana yang dibuat dengan JavaScript menggunakan Web Components. Proyek ini merupakan bagian dari tugas kursus Dicoding.

## Fitur

- Membuat catatan baru dengan judul dan konten
- Menampilkan daftar catatan dalam format grid yang responsif
- Validasi form untuk judul (minimal 3 karakter) dan konten (minimal 10 karakter)
- Tampilan kartu catatan yang rapi dengan tanggal pembuatan
- Responsive design yang bekerja di berbagai ukuran layar

## Teknologi yang Digunakan

- HTML5
- CSS3 (dengan Grid dan Flexbox)
- JavaScript (ES6+)
- Web Components
- Custom Elements
- Shadow DOM

## Struktur Komponen

Aplikasi ini terdiri dari beberapa Web Components utama:

1. `<app-header>`: Komponen header aplikasi
2. `<note-form>`: Komponen form untuk membuat catatan baru
3. `<note-card>`: Komponen untuk menampilkan setiap catatan

## Cara Penggunaan

1. Buka aplikasi di browser
2. Untuk membuat catatan baru:
   - Isi judul catatan (minimal 3 karakter)
   - Isi konten catatan (minimal 10 karakter)
   - Klik tombol "Add Note"
3. Catatan baru akan muncul di bagian atas grid

## Instalasi dan Menjalankan Aplikasi

1. Clone repository ini
```bash
git clone [url-repository-anda]
```

2. Buka file `index.html` di browser Anda

## Struktur Data

Setiap catatan memiliki struktur data sebagai berikut:
```javascript
{
  id: string,
  title: string,
  body: string,
  createdAt: string (ISO date),
  archived: boolean
}
```

## Validasi

Form memiliki validasi untuk:
- Judul: minimal 3 karakter
- Konten: minimal 10 karakter

Pesan error akan muncul jika validasi tidak terpenuhi.

## Responsive Design

Aplikasi ini responsif dengan:
- Grid layout yang menyesuaikan jumlah kolom berdasarkan ukuran layar
- Tampilan mobile-friendly untuk layar kecil
- Desain yang konsisten di berbagai ukuran device

## Pengembangan

Proyek ini dibuat sebagai bagian dari kursus Dicoding. Anda dapat mengembangkan lebih lanjut dengan menambahkan fitur seperti:
- Fitur pencarian catatan
- Fitur arsip catatan
- Fitur edit catatan
- Penyimpanan data ke local storage
- Fitur kategori atau tag untuk catatan

---
Dibuat sebagai bagian dari submission kursus Dicoding
