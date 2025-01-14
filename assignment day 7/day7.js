const _ = require('lodash');

let product = [
    {name: "Laptop", category: "Elektronik", stock: 50, pricePerUnit: 15000000},
    {name: "Smartphone", category: "Elektronik", stock: 100, pricePerUnit: 5000000}
]

//   Buat fungsi ‘ addProduct(inventory, product)’ untuk menambahkan produk baru ke inventaris.
function addProduct(inventory, product){
    inventory.push(product);
    console.log(`Produk ${product.name} berhasil di tambahkan!`);
    return inventory;
    
}

addProduct(product, {name: "Lipstik", category: "Kosmetik", stock: 100, pricePerUnit: 300000});



//Buat fungsi ‘removeProduct(inventory, productName)’ untuk menghapus produk dari inventaris berdasarkan nama produk.
function removeProduct(inventory, productName){

    let index = -1;
    for(i=0; i < inventory.length; i++){
        if(inventory[i].name === productName){
            index = i;
            break;
        }
    }
    inventory.splice(index, 1);
    console.log(`Produk ${productName} berhasil dihapus!`)
}

removeProduct(product, "Smartphone");


//Buat fungsi ‘updateProduct(inventory, productName, newDetails)’ untuk memperbarui informasi produk tertentu.
function updateProduct(inventory, productName, newDetails){
    let index = -1;
    for(i=0; i < inventory.length; i++){
        if(inventory[i].name === productName){
            inventory[i].name = newDetails.name;
            inventory[i].category = newDetails.category;
            inventory[i].stock = newDetails.stock;
            inventory[i].pricePerUnit = newDetails.pricePerUnit;
            break;
        }
    }
    console.log(`Produk ${productName} berhasil diperbaharui!`);

}

updateProduct(product, "Lipstik", {name: "Lipstik", category: "Kosmetik", stock: 100, pricePerUnit: 2000});
console.log(product);
