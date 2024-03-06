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
    var count = a.length
    console.log(count);
    for(var i = 1 ; i <=a.length ;i++){
       count--;
       if(count==3){
        return count;
       }
    }
   
}
select3('1234')
