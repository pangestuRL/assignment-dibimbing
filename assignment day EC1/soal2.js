function camelCase(str){
    let result = 1;
    let words = str.split('');
    let upperCase = str.toUpperCase().split('');
    for(let i = 0; i < words.length; i++){
        if(upperCase[i] === words[i]){
            result++;
        }
    }
    return result;
}

console.log(camelCase(`saveChangeInTheEditor`));
console.log(camelCase(`oneTwoThree`));