/* jshint esversion: 6 */

function panggilRegexp() {
    let str = 'abcdefghijklmnopqrstuvwxyz';

    console.log(str.search(/K/));
    console.log(str.search(/K/i));
    console.log(str.search(/k/i));
}

// panggilRegexp(); // mengembalikan index dari pencarian


function panggilRegexpFlagg() {
    let str = 'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz';

    console.log(str.match(/c/));
    console.log(str.match(/c/g));
    console.log(str.match(/C/gi));
}

// panggilRegexpFlagg();


function panggilRegexpPart1(value) {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

    var re = new RegExp(value, 'gi');
    console.log(str.match(re));
}

// panggilRegexpPart1('c');
// panggilRegexpPart1('k');
// panggilRegexpPart1('l');


// Replace
function panggilRegexp() {
    let data = "Belajar-Satu-Tahun-Bersama-Niomic";

    console.log(data.replace(/-/g, ' '));
}

// panggilRegexp();


function panggilRegexp(value) {

    if (/html/.test(value) || /css/.test(value)) {
        console.log(value);
    } else {
        console.log('Belajar');
    }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");

panggilRegexp("Belajar php");
