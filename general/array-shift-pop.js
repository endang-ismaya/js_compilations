function panggilShiftPop() {
    var kota = ['jakarta', 'bandung', 'malang', 'surabaya', 'makasar'];

    console.log(kota);
    console.log('===================================================');

    var kota2 = kota.shift();
    console.log(kota2);

    console.log('===================================================');
    var kota3 = kota.pop();
    console.log(kota3);
    console.log('===================================================');

    return kota;
}

console.log(panggilShiftPop());
