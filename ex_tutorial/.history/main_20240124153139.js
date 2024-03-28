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

function select3(str){
    var result = 0;
    var total = str.length ;
    var result2="";
    for(var i = 1 ; i <= total ;i++){
        if(total-i ==3){
            result = i;
        } 
    }
    for(var i = result;i<str.length;i++){
        result2+=str[i];
        
    }
    return result2;
    
// slice(-3)
}
console.log(select3('1234'));
