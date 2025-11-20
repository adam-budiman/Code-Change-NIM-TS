/**
 * Soal 3: Bilangan Prima
 * NIM: 051438428
 * 2 digit terakhir: 28
 * Batas: 28 + 10 = 38
 */

const nim = "051438428";
const duaDigitTerakhir = parseInt(nim.slice(-2));
const batasAkhir = duaDigitTerakhir + 10;

/**
 * Fungsi untuk mengecek apakah suatu bilangan adalah prima
 */
function isPrima(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    // Cek pembagi ganjil sampai akar dari num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log("=".repeat(50));
console.log("SOAL 3: BILANGAN PRIMA");
console.log("=".repeat(50));
console.log(`NIM: ${nim}`);
console.log(`2 Digit Terakhir: ${duaDigitTerakhir}`);
console.log(`Batas Akhir: ${duaDigitTerakhir} + 10 = ${batasAkhir}`);
console.log("=".repeat(50));
console.log(`\nBilangan Prima dari 1 sampai ${batasAkhir}:\n`);

// Mencari semua bilangan prima
const bilanganPrima: number[] = [];
for (let i = 2; i <= batasAkhir; i++) {
    if (isPrima(i)) {
        bilanganPrima.push(i);
    }
}

console.log(bilanganPrima.join(", "));
console.log(`\nTotal: ${bilanganPrima.length} bilangan prima`);

console.log("\n" + "=".repeat(50));
