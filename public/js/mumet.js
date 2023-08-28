//Stress dikit soal layouting ga ngaruh
// Mengambil semua elemen dengan class "hitung-mundur"
const hitungMundurElems = document.querySelectorAll('.hitung-mundur');

// Mencari elemen dengan ukuran terbesar
let maxUkuran = 0;

hitungMundurElems.forEach(elem => {
    const elemPanjang = elem.getBoundingClientRect().width;
    const elemTinggi = elem.getBoundingClientRect().height;
    if (elemPanjang > maxUkuran) {
        maxPanjang = elemPanjang;
        if (elemTinggi > maxUkuran) {
            maxTinggi = elemTinggi;
        }
    }
});

// Menyetel ukuran terbesar pada semua elemen
hitungMundurElems.forEach(elem => {
    elem.style.width = maxPanjang + 'px';
    elem.style.height = maxTinggi + 'px';
});