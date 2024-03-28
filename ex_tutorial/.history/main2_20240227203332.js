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
console.log(myFunction('abcdefg'));

function lastNElements(a, n) {
    // Return the last n elements of the array
    return a.slice(-n);
}
console.log(lastNElements([1, 2, 3, 4, 5],2));