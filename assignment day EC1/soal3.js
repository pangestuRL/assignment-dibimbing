function alternatingCharacters(string){
    let deleted = [];
    let before = ``;
    for(let i = 0; i < string.length; i++){
        if(before.length == 0 || string[i] != before){
            before = string[i];
        }else if(string[i] == before){
            deleted.push(string[i]);
        }
    };
    return deleted.length;
}

console.log(alternatingCharacters(`ABABABAB`));
console.log(alternatingCharacters(`AAAAA`));
console.log(alternatingCharacters(`BBBBBBB`));
console.log(alternatingCharacters(`AAABB`));