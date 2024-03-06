function myFunction (a) {
    let result = '';
    for(let i = 0 ; i < a.length ;i++){
        if(i==3){
            return result;
        }
        else {
            result+=a[i];
        }
    }
}
console.log(myFunction('abcdefg'))