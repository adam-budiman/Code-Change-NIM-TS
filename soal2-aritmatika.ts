/**
 * Soal 2: Deret Aritmatika
 * NIM: 051438428
 * 2 digit terakhir: 28 (angka awal)
 * Digit ke-3 dari belakang: 4, maka beda = 4 + 1 = 5
 */

const nim = "051438428";
const duaDigitTerakhir = parseInt(nim.slice(-2));
const digitKe3DariBelakang = parseInt(nim[nim.length - 3]);
const angkaAwal = duaDigitTerakhir;
const beda = digitKe3DariBelakang + 1;
const jumlahAngka = 10;

console.log("=".repeat(50));
console.log("SOAL 2: DERET ARITMATIKA");
console.log("=".repeat(50));
console.log(`NIM: ${nim}`);
console.log(`2 Digit Terakhir: ${duaDigitTerakhir} (angka awal)`);
console.log(`Digit ke-3 dari Belakang: ${digitKe3DariBelakang}`);
console.log(`Beda (step): ${digitKe3DariBelakang} + 1 = ${beda}`);
console.log(`Rumus: a_n = ${angkaAwal} + (n-1) × ${beda}`);
console.log("=".repeat(50));
console.log("\n10 Angka Pertama:\n");

// Membuat deret aritmatika
const deretAritmatika: number[] = [];
for (let i = 0; i < jumlahAngka; i++) {
    const nilai = angkaAwal + (i * beda);
    deretAritmatika.push(nilai);
}

console.log(deretAritmatika.join(", "));

console.log("\n" + "=".repeat(50));
