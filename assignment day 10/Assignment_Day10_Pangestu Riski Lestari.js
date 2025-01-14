class Sekolahan {
    constructor(daftarSiswa) {
        this.daftarSiswa = daftarSiswa
    }

    searchNilaiMapel(mapel, nilai) {
        const daftarSiswaByNilaiMapel = this.daftarSiswa.filter(siswa => siswa.nilaiUjian[mapel] === nilai)
        .map(siswa => siswa.nama);
        return daftarSiswaByNilaiMapel;
    }

    daftarRankingSiswa() {
        const daftarRanking = this.daftarSiswa.sort((a, b) => b.nilaiRataUjian - a.nilaiRataUjian)
        .map((siswa, index) => ({ 
            ranking: index+1, 
            nama: siswa.nama, 
            kelas: siswa.kelas, 
            "nilai rata rata": siswa.nilaiRataUjian 
        }))

        return daftarRanking
    }

    daftarAbsensiSiswa() {
        const daftarAbsensi = this.daftarSiswa.sort((a, b) => a.nama.localeCompare(b.nama))
        .map(siswa => ({ nama: siswa.nama, kelas: siswa.kelas }))

        return daftarAbsensi
    }
}

// buat class Siswa dibawah sini
class Siswa {
    constructor(nama, kelas, nilaiUjian){
        this.nama = nama;
        this.kelas = kelas;
        this.nilaiUjian = nilaiUjian;
        this.nilaiRataUjian = this.hitungRataNilaiUjian();
    }

    hitungRataNilaiUjian() {
        const totalNilaiUjian = Object.values(this.nilaiUjian).reduce((a, b) => a + b, 0);
        const jumlahMataPelajaran = Object.keys(this.nilaiUjian).length;
        return (totalNilaiUjian / jumlahMataPelajaran).toFixed(2);
    }
}


// --------
const bima = new Siswa(`Bima`, `10A`, {matematika: 90, ipa: 88, ips: 29, bahasa: 70, komputer: 100});
const silvi = new Siswa(`Silvi`, `10A`, {matematika: 80, ipa: 90, ips: 50, bahasa: 95, komputer: 98});
const agus = new Siswa(`Agus`, `10A`, {matematika: 70, ipa: 95, ips: 80, bahasa: 90, komputer: 95});
const nindya = new Siswa(`Nindya`, `10A`, {matematika: 95, ipa: 100, ips: 80, bahasa: 90, komputer: 99});
const rudi = new Siswa(`Rudi`, `10A`, {matematika: 75, ipa: 85, ips: 70, bahasa: 80, komputer: 85});
const agnes = new Siswa(`Agnes`, `10A`, {matematika: 80, ipa: 88, ips: 60, bahasa: 80, komputer: 80});
const rahma = new Siswa(`Rahma`, `10A`, {matematika: 80, ipa: 90, ips: 70, bahasa: 75, komputer: 85});
const suneo = new Siswa(`Suneo`, `10A`, {matematika: 80, ipa: 80, ips: 85, bahasa: 85, komputer: 95});
const zahra = new Siswa(`Zahra`, `10A`, {matematika: 95, ipa: 90, ips: 85, bahasa: 87, komputer: 95});
const pascal = new Siswa(`Pascal`, `10A`, {matematika: 90, ipa: 90, ips: 87, bahasa: 90, komputer: 100});


const daftarSiswa = [bima, silvi, agus, nindya, rudi, agnes, rahma, suneo, zahra, pascal];
const sekolahTadikaMesra = new Sekolahan(daftarSiswa);
console.log(daftarSiswa);

const daftarSiswaByNilaiMapel = sekolahTadikaMesra.searchNilaiMapel("ipa", 90);

const daftarRankingSiswa = sekolahTadikaMesra.daftarRankingSiswa()
const daftarAbsensiSiswa = sekolahTadikaMesra.daftarAbsensiSiswa()

console.log("=============== DAFTAR SISWA UNTUK PELAJARAN ===============")
console.table(daftarSiswaByNilaiMapel)

console.log("=============== DAFTAR RANKING ===============")
console.table(daftarRankingSiswa)

console.log("=============== DAFTAR ABSENSI ===============")
console.table(sekolahTadikaMesra.daftarAbsensiSiswa())