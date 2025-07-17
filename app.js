const API_KEY = "my-hardcoded-secret-key"
// Fungsi penjumlahan
function tambah(a, b) {
return a + b;
}

// Fungsi pengurangan
function kurang(a, b) {
return a - b;
}

// Ekspor fungsi untuk digunakan di file lain
module.exports = {
tambah,
kurang
};


