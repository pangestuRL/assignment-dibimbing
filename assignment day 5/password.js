function isValidPassword(password){
    const passArr = password.split('').map(char => {
        return isNaN(char) ? char : Number(char); // Convert to number if it's a digit, else keep as string
      });
    let hurufBesar = "";
    let hurufKecil = "";
    let cekAngka = "";
    let cekSymbol = "";
    
    console.log(passArr);
    for (let i = 0; i < passArr.length; i++){
        if(isUpperCase(passArr[i]) == true){
            hurufBesar = passArr[i];
        }
        if(isLowerCase(passArr[i]) == true){
            hurufKecil = passArr[i];
        }
        if(isNumber(passArr[i] == true)){
            cekAngka = passArr[i];
        }
        if(isSpecialCharacter(passArr[i] == true)){
            cekSymbol = passArr[i];
        }
    }

    if (password.length < 8){
        alert(`Password minimal 8 karakter!`);
    }else if(hurufBesar.length == 0){
        alert(`Password harus memiliki minimal 1 huruf kapital!`);
    }else if(hurufKecil.length == 0){
        alert(`Password harus memiliki minimal 1 huruf kecil!`);
    }else if(cekAngka.length == 0){
        alert(`Password harus memiliki minimal 1 angka!`);
    }else if(cekSymbol.length != 0){
        alert(`Password tidak boleh menggunakan simbol!`);
    }
}


function isUpperCase(str){
    let newStr = str.toUpperCase();
    return str == newStr;
}
function isLowerCase(str){
    let newStr = str.toLowerCase();
    let cek = str === newStr;
    return cek;
}
function isNumber(number){
    let listNumber = `0123456789`;
    let cek = listNumber.includes(number);
    return cek;
}
function isSpecialCharacter(simbol){
    let listSimbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    return listSimbol.test(simbol);
}



isValidPassword('saksj');
console.log(hurufBesar);
console.log(hurufKecil);
console.log(cekAngka);
console.log(cekSymbol);




