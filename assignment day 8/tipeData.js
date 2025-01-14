function cariTipeData(searchKey, ...rest){
    const result = rest.filter(input => typeof input == searchKey)
    console.log(result);
    return result;
}


cariTipeData (`number`, 5, `Hafiq`, true, `Ihsan`, 2, 4, `Jakarta`);