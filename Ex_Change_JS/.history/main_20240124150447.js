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
    var result = "";
    var total = a.length ;
    for(var i = 1 ; i <=a.length ;i++){
      if(total-i==3){
           for(var i2 = 1 ; i<(total-i);i++){
               result+=a[i2];
           }
      }
    }
    return result;
   
}
console.log(select3('1234'));
