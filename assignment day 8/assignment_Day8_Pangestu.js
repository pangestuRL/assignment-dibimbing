/* 1. Catatan Keuangan:
Ada seorang anak memiliki uang tabungan sejumlah Rp xxxxx yang ingin membeli beberapa barang di sebuah toko,
dimana harga barang yang lebih dari 5000 akan mendapatkan diskon 20%.
Ia ingin mencatat sisa dari uang yang ia miliki dan total uang yang telah ia keluarkan
untuk membeli barang tersebut. Bantulah anak tersebut untuk mencatat riwayat keuangannya!
*/

let tabungan = 100000;
console.log(`tabungan: ${tabungan}`);

function catatanKeuangan(...hargaBarang){
    const totalPengeluaran = hargaBarang.map(harga => {
        if (harga > 5000) {
          return harga * 0.8; 
        }
        return harga;
      }).reduce((total, harga) => total + harga, 0);
      tabungan -= totalPengeluaran;

    console.log(`Total Pengeluaran: Rp ${totalPengeluaran}`);
    console.log(`Sisa Tabungan: Rp ${tabungan}`);

}

catatanKeuangan(5000, 6000, 100, 2000);




/* 2. Function Merge Object:
Buatlah sebuah fungsi "mergedObject" yang menerima dua argumen pertama berupa object,dan argumen ketiga
berupa string. Hasil yang diberikan berupa menampilkan hasil gabungan kedua object argumen pertama
tanpa memiliki atribut pada argumen ketiga
*/

function mergedObject(obj1, obj2, keyToRemove) {
    const result = { ...obj1, ...obj2 };
    delete result[keyToRemove];
    return result;
}

console.log(mergedObject(
    {nama: `Budi`, umur: 26},
    {golonganDarah: `A`, tempatLahir: `Bengkulu`, tanggalLahir: `12 Maret 1997`},
    `umur`
));




/*3. Function Cari Tipe Data
Buatlah fungsi untuk mencari nilai argumen yang bertipe data sesuai pada argumen pertama! 
*/

function cariTipeData(searchKey, ...rest){
    const result = rest.filter(input => typeof input == searchKey)
    console.log(result);
    return result;
}


cariTipeData (`number`, 5, `Hafiq`, true, `Ihsan`, 2, 4, `Jakarta`);