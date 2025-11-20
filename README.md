# TypeScript - Bilangan Matematika

Solusi **pure TypeScript** untuk 3 soal matematika berdasarkan NIM **-**.

## ✅ Status

---

## 🚀 Cara Menjalankan (Pilih Salah Satu)

### 1️⃣ Double-click Batch File (Termudah!)

Cukup double-click file berikut:
- **`jalankan.bat`** → Jalankan semua soal sekaligus
- **`soal1.bat`** → Soal 1: Pola Segitiga
- **`soal2.bat`** → Soal 2: Deret Aritmatika
- **`soal3.bat`** → Soal 3: Bilangan Prima

### 2️⃣ Via Terminal

```bash
# Jalankan semua soal
tsx jalankan-semua.ts

# Atau per soal
tsx soal1-segitiga.ts
tsx soal2-aritmatika.ts
tsx soal3-prima.ts
```

---

## 📁 File Pure TypeScript

### File TypeScript (.ts)
- `jalankan-semua.ts` - Semua soal dalam satu file
- `soal1-segitiga.ts` - Pola segitiga (tinggi 8)
- `soal2-aritmatika.ts` - Deret aritmatika (28, 33, 38, ...)
- `soal3-prima.ts` - Bilangan prima (sampai 38)

### Batch Files (.bat)
- `jalankan.bat` - Jalankan semua
- `soal1.bat`, `soal2.bat`, `soal3.bat` - Per soal

---

## 📊 Hasil yang Diharapkan

### Soal 1: Pola Segitiga
```
Tinggi: 8
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
```

### Soal 2: Deret Aritmatika
```
Start: 28, Beda: 5
28, 33, 38, 43, 48, 53, 58, 63, 68, 73
```

### Soal 3: Bilangan Prima
```
Batas: 38
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37
Total: 12 bilangan prima
```

---

## 🎯 Analisis NIM

**NIM: -**

| Ekstraksi | Nilai | Digunakan Untuk |
|-----------|-------|-----------------|
| Digit terakhir | 8 | Tinggi segitiga (Soal 1) |
| 2 digit terakhir | 28 | Angka awal deret (Soal 2) |
| Digit ke-3 dari belakang | 4 | Beda = 4 + 1 = 5 (Soal 2) |
| 2 digit terakhir + 10 | 38 | Batas prima (Soal 3) |

---

## 💻 Type Annotations

Semua file menggunakan **TypeScript type annotations**:

```typescript
const nim: string = "-";
const tinggi: number = 8;
const deret: number[] = [28, 33, 38, ...];
function isPrima(num: number): boolean { ... }
```

---

## ✅ Sudah Diverifikasi

✓ Semua file TypeScript berhasil dijalankan  
✓ Output sesuai dengan yang diharapkan  
✓ tsx terinstall dan siap digunakan  
✓ Batch files berfungsi dengan baik
