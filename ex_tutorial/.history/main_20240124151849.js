// function myFunction(a,n){
//     for(var i = 1 ; i <= a.length ;i++){
//          if(i==n){
//             return a[i-1];
//          }
//     }
// }
// console.log(myFunction('zyxbwpl',5))

// function deleteFirst3(a){
//     var result = "";
//     var count = 3 ;
//     for(var i = 1 ; i <=a.length ;i++){
      
//     }
//     return result;
// }
// console.log(deleteFirst3('abcdefg'))

function select3(a){
    var result = 0;
    var total = a.length ;
    for(var i = 1 ; i <= total ;i++){
        if(total-i ==3){
            result = a[i];
        }
        
    }
    return result;
    // var result2 =""
    // for(var i2 = result ; i2<=total;i++){
    //      result2+=a[i2];
    // }
    // return result2;

}
console.log(select3('abcdefg'));
