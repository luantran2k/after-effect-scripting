// function sortS() {
//     s =
//         'Minion Pro,Tahoma,Consolas,Arial,Bahnschrift,Bookman Old Style,Calibri,Cambria,Century';
//     arr = s.split(',');
//     arr.sort();
//     newS = arr.join('","');
//     return newS;
// }
// console.log(sortS());

// function createArr() {
//     s = '';
//     for (i = 24; i <= 96; i += 4) {
//         s += i + ',';
//     }
//     console.log(s);
// }
// createArr();

// var fun1 = function () {
//     chooseColor('a');
// };
// var fun2 = function () {
//     chooseColor('b');
// };
// var fun3 = function () {
//     chooseColor('c');
// };

// function chooseColor(s) {
//     console.log('run ' + s);
// }
// fun3();

// var dataObject = {
//     backgroundMusic: './backgroundMusic.mp3',
//     mascotFolder: './macot',
//     placeFolder: './competition-venue',
//     sportName: [
//         'Bóng đá',
//         'Bóng rổ',
//         'Bắn cung',
//         'Bơi lội',
//         'Cầu lông',
//         'Bóng chuyền'
//     ],
//     sportPlace: [
//         'Sân vận động quốc gia Mỹ Đình - Hà Nội',
//         'Nhà thi đấu Thanh Trì - Hà Nội',
//         'Trung tâm Huấn luyện Thể thao Quốc gia Hà Nội',
//         'Cung thể thao dưới nước (Hà Nội)',
//         'Nhà thi đấu tỉnh Bắc Giang',
//         'Nhà thi đấu đa năng tỉnh Quảng Ninh'
//     ]
// };
// var place = {
//     football: 'Sân vận động quốc gia Mỹ Đình - Hà Nội',
//     basketball: 'Nhà thi đấu Thanh Trì - Hà Nội',
//     archery: 'Trung tâm Huấn luyện Thể thao Quốc gia Hà Nội',
//     swimming: 'Cung thể thao dưới nước (Hà Nội)',
//     badminton: 'Nhà thi đấu tỉnh Bắc Giang',
//     volleyball: 'Nhà thi đấu đa năng tỉnh Quảng Ninh'
// };

// const FileSystem = require('fs');
// FileSystem.writeFile('data-place.json', JSON.stringify(place), (error) => {
//     if (error) throw error;
// });

// var languageObj = {
//     'Tiếng việt': {
//         1: 'Chào mừng bạn đến với ',
//         2: '\nđược tổ chức tại ',
//         3: 'Bao gồm các môn thi đấu sau'
//     },
//     English: {}
// };

// console.log(languageObj['Tiếng việt'][1]);
// var start = 10;
// var keyOpacity = {};

// keyOpacity[start] = 0;
// keyOpacity[start + 0.5] = 100;
// keyOpacity[start + 2] = 99;
// keyOpacity[start + 2.5] = 0;
// for (var prop in keyOpacity) {
//     console.log(prop);
// }

var i = 2;
switch (i) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
}
