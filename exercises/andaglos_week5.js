/* jshint esversion: 6 */

// ----------------------------------------
// 1. Exercise Faktorial Rekursif
// ----------------------------------------
function faktorialRekursif(angka) {

    return (angka === 1) ? 1 : angka * faktorialRekursif(angka - 1);
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 1. Exercise Faktorial Rekursif');
console.log('// ----------------------------------------');
console.log(faktorialRekursif(3)); // 6
console.log(faktorialRekursif(4)); // 24
console.log(faktorialRekursif(5)); // 120
console.log(faktorialRekursif(2)); // 2
console.log(faktorialRekursif(1)); // 1
console.log('\n');


// ----------------------------------------
// 2. Exercise Total Digit Rekursif
// ----------------------------------------
function totalDigitRekursif(angka) {

    return (angka.toString().length < 1) ? 0 : Number(angka.toString()[0]) + totalDigitRekursif(angka.toString().slice(1, angka.toString().length));

}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 2. Exercise Total Digit Rekursif');
console.log('// ----------------------------------------');
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log('\n');


// ----------------------------------------
// 3. Exercise Kali Terus Rekursif
// ----------------------------------------
function kaliTerusRekursif(angka) {

    if (angka.toString().length === 1) {
        return angka;
    } else {
        let ix = function (x) {
            return (x.toString().length < 1) ? 1 : Number(x.toString()[0]) * ix(x.toString().slice(1, x.toString().length));
        };
        return kaliTerusRekursif(ix(angka));
    }
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 3. Exercise Kali Terus Rekursif');
console.log('// ----------------------------------------');
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log('\n');


// ----------------------------------------
// 4. Exercise Hapus Simbol (Regex)
// ----------------------------------------
function hapusSimbol(str) {

    return str.replace(/[%\$@\s+#!~\+\*\=\-]/g, '');

}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 4. Exercise Hapus Simbol (Regex)');
console.log('// ----------------------------------------');
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
console.log('\n');


// ----------------------------------------
// 5. Exercise Cari Pelaku (Regex)
// ----------------------------------------
function cariPelaku(str) {

    return str.split(/abc/).length - 1;
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 5. Exercise Cari Pelaku (Regex)');
console.log('// ----------------------------------------');
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
console.log('\n');