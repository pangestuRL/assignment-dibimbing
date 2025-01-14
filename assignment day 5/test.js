function isValidPassword(password){
    let passArr = password.split("");
    let hurufBesar = "";
    let hurufKecil = "";
    let adaAngka = "";
    let adaSimbol = "";
    for(i = 0; i < passArr.length; i++){
        let upper = isUpperCase(passArr[i]);
        if (upper == true){
            hurufBesar = passArr[i]; 
        }
        let lower = isLowerCase(passArr[i]);
        if (lower == true){
            hurufKecil = passArr[i];
        }
        let angka = cekNumber(passArr[i]);
        if (angka == true){
            adaAngka = passArr[i];
        }
        let simbol = cekSpecialCharacter(passArr[i]);
        if (simbol == true){
            adaSimbol = passArr[i];
        }
    }
    if (password.length < 8){
        alert(`Password ${password} harus mengandung minimal 8 karakter!`);
    }else if(hurufBesar.length == 0){
        alert(`Pasword ${password} harus memiliki minimal 1 huruf kapital!`);
    }else if(hurufKecil.length == 0){
        alert(`Password ${password} harus memiliki minimal 1 huruf kecil!`);
    }else if(adaAngka.length == 0){
        alert(`Password ${password} harus memiliki minimal 1 angka!`);
    }else if(adaSimbol.length != 0){
        alert(`Password ${password} tidak boleh menggunakan simbol!`);
    }else{
        alert(`${password} is valid`);
    }
}
function isUpperCase (str){
    let newStr = str.toUpperCase();
    return str === newStr;
}

function isLowerCase (str){
    let newStr = str.toLowerCase();
    return str === newStr;
}

function cekNumber (input){
    let number = `0123456789`;
    let cek = number.includes(input);
    return cek;
}

function cekSpecialCharacter (input){
    let symbol = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let cek = symbol.test(input);
    return cek;
}
// TEST PASSWORD
isValidPassword(`AAAAAAAA`);
