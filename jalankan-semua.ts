/**
 * File untuk menjalankan semua soal sekaligus
 * NIM: 051438428
 */

const nim = "051438428";

console.log("\n");
console.log("╔" + "═".repeat(58) + "╗");
console.log("║" + " ".repeat(10) + "TUGAS BILANGAN MATEMATIKA" + " ".repeat(23) + "║");
console.log("║" + " ".repeat(20) + "NIM: 051438428" + " ".repeat(24) + "║");
console.log("╚" + "═".repeat(58) + "╝");
console.log("\n");

// ============================================================
// SOAL 1: POLA SEGITIGA
// ============================================================
const digitTerakhir = parseInt(nim[nim.length - 1]);
const tinggiSegitiga = digitTerakhir;

console.log("┌" + "─".repeat(58) + "┐");
console.log("│  SOAL 1: POLA SEGITIGA" + " ".repeat(35) + "│");
console.log("└" + "─".repeat(58) + "┘");
console.log(`  NIM: ${nim}`);
console.log(`  Digit Terakhir: ${digitTerakhir}`);
console.log(`  Tinggi Segitiga: ${tinggiSegitiga}`);
console.log("\n  Output:\n");

for (let i = 1; i <= tinggiSegitiga; i++) {
    let baris = "  ";
    for (let j = 1; j <= i; j++) {
        baris += j + " ";
    }
    console.log(baris.trim());
}

console.log("\n");

// ============================================================
// SOAL 2: DERET ARITMATIKA
// ============================================================
const duaDigitTerakhir = parseInt(nim.slice(-2));
const digitKe3DariBelakang = parseInt(nim[nim.length - 3]);
const angkaAwal = duaDigitTerakhir;
const beda = digitKe3DariBelakang + 1;
const jumlahAngka = 10;

console.log("┌" + "─".repeat(58) + "┐");
console.log("│  SOAL 2: DERET ARITMATIKA" + " ".repeat(32) + "│");
console.log("└" + "─".repeat(58) + "┘");
console.log(`  NIM: ${nim}`);
console.log(`  2 Digit Terakhir: ${duaDigitTerakhir} (angka awal)`);
console.log(`  Digit ke-3 dari Belakang: ${digitKe3DariBelakang}`);
console.log(`  Beda (step): ${digitKe3DariBelakang} + 1 = ${beda}`);
console.log(`  Rumus: a_n = ${angkaAwal} + (n-1) × ${beda}`);
console.log("\n  10 Angka Pertama:\n");

const deretAritmatika: number[] = [];
for (let i = 0; i < jumlahAngka; i++) {
    const nilai = angkaAwal + (i * beda);
    deretAritmatika.push(nilai);
}

console.log("  " + deretAritmatika.join(", "));

console.log("\n");

// ============================================================
// SOAL 3: BILANGAN PRIMA
// ============================================================
const batasAkhir = duaDigitTerakhir + 10;

function isPrima(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log("┌" + "─".repeat(58) + "┐");
console.log("│  SOAL 3: BILANGAN PRIMA" + " ".repeat(34) + "│");
console.log("└" + "─".repeat(58) + "┘");
console.log(`  NIM: ${nim}`);
console.log(`  2 Digit Terakhir: ${duaDigitTerakhir}`);
console.log(`  Batas Akhir: ${duaDigitTerakhir} + 10 = ${batasAkhir}`);
console.log(`\n  Bilangan Prima dari 1 sampai ${batasAkhir}:\n`);

const bilanganPrima: number[] = [];
for (let i = 2; i <= batasAkhir; i++) {
    if (isPrima(i)) {
        bilanganPrima.push(i);
    }
}

console.log("  " + bilanganPrima.join(", "));
console.log(`\n  Total: ${bilanganPrima.length} bilangan prima`);

console.log("\n");
console.log("╔" + "═".repeat(58) + "╗");
console.log("║" + " ".repeat(22) + "SELESAI" + " ".repeat(29) + "║");
console.log("╚" + "═".repeat(58) + "╝");
console.log("\n");
