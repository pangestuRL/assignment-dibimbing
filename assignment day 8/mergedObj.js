function mergedObject(obj1, obj2, keyToRemove) {
    const result = { ...obj1, ...obj2 };
    delete result[keyToRemove];
    return result;
}

console.log(mergedObject(
    {nama: `Budi`, umur: 26},
    {golonganDarah: `A`, tempatLahir: `Bengkulu`, tanggalLahir: `12 Maret 1997`},
    `umur`
));

// //expected output
// {
//     nama: `Budi`,
//     golonganDarah: `A`,
//     tempatLahir: `Bengkulu`,
//     tanggalLahir: `12 Maret 1997`,
// }