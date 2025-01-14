"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(nama) {
    return "".concat(nama.firstName, " ").concat(nama.lastName);
}
var fullName = {
    firstName: "Rahmawati",
    lastName: "Susanto"
};
console.log(getFullName(fullName));
/*Soal 2
Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array.
Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return.
*/
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray(100));
console.log(wrapInArray("Ujian"));
console.log(wrapInArray({ name: "Rara", age: 25 }));
