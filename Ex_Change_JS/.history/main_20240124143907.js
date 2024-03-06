// function myFunction(a,n){
//     for(var i = 1 ; i <= a.length ;i++){
//          if(i==n){
//             return a[i-1];
//          }
//     }
// }
// console.log(myFunction('zyxbwpl',5))

function deleteFirst3(a){
    var result = "";
    for(var i = a.length ; i >=3 ;i--){
       result+=a[i];
    }
    return result;
}
console.log(deleteFirst3('abcdefg'))
