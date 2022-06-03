// function sortS() {
//     s =
//         'Minion Pro,Tahoma,Consolas,Arial,Bahnschrift,Bookman Old Style,Calibri,Cambria,Century';
//     arr = s.split(',');
//     arr.sort();
//     newS = arr.join(',');
//     return newS;
// }

// function createArr() {
//     s = '';
//     for (i = 20; i <= 44; i += 2) {
//         s += i + ',-,';
//     }
//     console.log(s);
// }

var fun1 = function () {
    chooseColor('a');
};
var fun2 = function () {
    chooseColor('b');
};
var fun3 = function () {
    chooseColor('c');
};

function chooseColor(s) {
    console.log('run ' + s);
}
fun3();
