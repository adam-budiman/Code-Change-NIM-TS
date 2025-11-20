# Pure TypeScript - Bilangan Matematika

Solusi murni TypeScript untuk 3 soal matematika berdasarkan NIM 051438428.

## 🚀 Cara Menjalankan TypeScript

### Opsi 1: Menggunakan Deno (Recommended - Tanpa Setup)

Deno bisa langsung menjalankan TypeScript tanpa instalasi apapun.

**Install Deno:**
```powershell
irm https://deno.land/install.ps1 | iex
```

**Jalankan:**
```bash
deno run jalankan-semua.ts
deno run soal1-segitiga.ts
deno run soal2-aritmatika.ts
deno run soal3-prima.ts
```

### Opsi 2: Menggunakan tsx via Command Prompt

**Buka Command Prompt (cmd.exe), bukan PowerShell:**

```cmd
cd "c:\Users\adamb\OneDrive\Documents\Semester 5 Adam\Bilangan Matematika"
npm install -g tsx
tsx jalankan-semua.ts
```

### Opsi 3: Compile TypeScript lalu Jalankan

```cmd
npx tsc jalankan-semua.ts --target ES2020
node jalankan-semua.js
```

### Opsi 4: Fix PowerShell Policy (Permanent)

**Buka PowerShell sebagai Administrator:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Lalu jalankan:
```powershell
npm install -g tsx
tsx jalankan-semua.ts
```

## 📁 File TypeScript

- `jalankan-semua.ts` - Jalankan semua soal
- `soal1-segitiga.ts` - Pola segitiga
- `soal2-aritmatika.ts` - Deret aritmatika  
- `soal3-prima.ts` - Bilangan prima

## 📊 Output yang Diharapkan

```
╔══════════════════════════════════════════════════════════╗
║          TUGAS BILANGAN MATEMATIKA                       ║
║                    NIM: 051438428                        ║
╚══════════════════════════════════════════════════════════╝

SOAL 1: POLA SEGITIGA
Tinggi: 8
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8

SOAL 2: DERET ARITMATIKA
Start: 28, Beda: 5
28, 33, 38, 43, 48, 53, 58, 63, 68, 73

SOAL 3: BILANGAN PRIMA
Batas: 38
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37
Total: 12 bilangan prima
```

## ✅ Semua File Pure TypeScript

Tidak ada file JavaScript (.js) yang digunakan. Semua kode murni TypeScript (.ts) dengan type annotations lengkap.
