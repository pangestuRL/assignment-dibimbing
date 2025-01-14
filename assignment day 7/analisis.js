const _ = require('lodash');

let product = [
    {name: "Laptop", category: "Elektronik", stock: 50, pricePerUnit: 15000000},
    {name: "Smartphone", category: "Elektronik", stock: 100, pricePerUnit: 5000000}
]

//Buat fungsi ‘findMostExpensiveProduct(inventory)’ menggunakan Lodash untuk menemukan produk dengan harga tertinggi.
function findMostExpensiveProduct(inventory){
    const mostExpensive = _.maxBy(inventory, `pricePerUnit`);
    return mostExpensive? mostExpensive : `Inventaris kosong.`;
}
const result = findMostExpensiveProduct(product);
console.log("Produk termahal:", result);



// Buat fungsi ‘calculateTotalInventoryValue(inventory)’
function calculateTotalInventoryValue(inventory) {
    const totalValues = _.map(inventory, product => product.stock * product.pricePerUnit);
    return _.sum(totalValues);
}
const totalValue = calculateTotalInventoryValue(product);
console.log("Total nilai inventaris:", totalValue);



// Buat fungsi ‘filterProductsByCategory(inventory, category)’
function filterProductsByCategory(inventory, category) {
    return _.filter(inventory, { category });
}
const electronics = filterProductsByCategory(product, `Elektronik`);
console.log(`Produk Elektronik: `, electronics);
