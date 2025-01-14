/*
Soal 1
Buat sebuah fungsi bernama getFullName yang menerima parameter dengan tipe data Person. Tipe Person ini adalah sebuah type alias yang memiliki properti firstName (string) dan lastName (string).
Kembalikan hasil concatenasi dari firstName dan lastName, dipisahkan oleh spasi.
*/
type Person = {
    firstName : string;
    lastName : string;
}

function getFullName(nama: Person) : string{
    return `${nama.firstName} ${nama.lastName}`;
}

const fullName : Person = {
    firstName : `Rahmawati`,
    lastName : `Susanto`
}

console.log(getFullName(fullName));

/*Soal 2
Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array.
Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return.
*/
function wrapInArray<T>(item :T) :T[]{
    return [item];
}

console.log(wrapInArray(100));

console.log(wrapInArray("Ujian"));

console.log(wrapInArray({ name: "Rara", age: 25 }));

export {};