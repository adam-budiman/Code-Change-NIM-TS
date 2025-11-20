/**
 * Soal 1: Pola Segitiga
 * NIM: 051438428
 * Digit terakhir: 8 (tinggi segitiga)
 */

const nim = "051438428";
const digitTerakhir = parseInt(nim[nim.length - 1]);
const tinggiSegitiga = digitTerakhir;

console.log("=".repeat(50));
console.log("SOAL 1: POLA SEGITIGA");
console.log("=".repeat(50));
console.log(`NIM: ${nim}`);
console.log(`Digit Terakhir: ${digitTerakhir}`);
console.log(`Tinggi Segitiga: ${tinggiSegitiga}`);
console.log("=".repeat(50));
console.log("\nOutput:\n");

// Membuat pola segitiga
for (let i = 1; i <= tinggiSegitiga; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += j + " ";
    }
    console.log(baris.trim());
}

console.log("\n" + "=".repeat(50));
