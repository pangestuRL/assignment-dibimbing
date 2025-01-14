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
