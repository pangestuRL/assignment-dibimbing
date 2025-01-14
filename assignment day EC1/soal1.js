function isPalindrome(str){
    let arrStr = str.toLowerCase().split(``);
    let cleanedStr = ``;
    for(let i = 0; i < arrStr.length; i++){
        if ((arrStr[i] >= `a` && arrStr[i] <= `z`) ||
            (arrStr[i] >= `A` && arrStr[i] <= `Z`) ||
            (arrStr[i] >= `0` && arrStr[i] <= `9`)){
                cleanedStr += arrStr[i];
        }
    }
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome(`Kasur rusAk`));
console.log(isPalindrome(`madam, I'm adam`));
console.log(isPalindrome(`Saya makan`));