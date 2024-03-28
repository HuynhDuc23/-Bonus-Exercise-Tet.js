function myFunction(a,n){
    for(var i = 1 ; i <= a.length ;i++){
         if(i==n){
            return a[i-1];
         }
    }
}
// console.log(myFunction('zyxbwpl',5))

function deleteFirst3(a){
    var result = "";
    var count = 3 ;
    for(var i = 1 ; i <=a.length ;i++){
      
    }
    return result;
}
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
// console.log(select3('1234'));
// console.log(str.slice(-3))

function get3Character(a){
    var result =  "";
    for(var i = 0 ; i <= a.length ;i++){
        result+=a[i];
        if(result.length ==3){
            return result ;
        }
    }
}
// console.log(get3Character('1234'))
// slice(0,3)
function subString1(a){
     var result = "is";
     var check  = false ;
    for(var i = 0 ; i < a.length ;i++){
           if(a[i]==result[0]){
               check = true ;
            //    for(var j = 1 ; j<=result.length-1)
           }
    }
}
// console.log(subString1("praise"))

function myFunctionArray(a,n){
    for(let i = 1 ; i <= a.length ;i++){
        if(i==n){
            return a[i-1] ;
        }
    }
}
// console.log(myFunctionArray([7,2,1,6,3],1));

function myFunctionArray2(a){
     let result = [];
     let count = 0 ;
     for(i = 1; i <=a.length ;i++){
         if(i==3){
            count = i ;
            break;
         }
     }
    
     for(let i  = count ; i < a.length ;i++){
        result.push(a[i]);
     }
     return result;
}
// console.log(myFunctionArray2([5,4,3,2,1,0]))
// a.slice(3);

function myFunctionArray3(a){
    let count = 0 ;
    var result = [];
    for (let i = 1 ; i <=a.length ;i++){
        if(a.length - i ==3){
            count = i ;
            break;
        }
    }
   
    for(let i = count ; i<a.length;i++){
         
          result.push(a[i]);
    }
    return result ;

}
//console.log(myFunctionArray3([5,4,3,2,1,0]));
// a.slice(-3);
function myFunctionArray4(a){
    let result = [];
    for(let i = 1 ; i <=a.length ;i++){
        if(i<=3){

            result.push(a[i-1]);
        }else{
            break ;
        }
    }
    return result ;
}
// console.log(myFunctionArray4([5,4,3,2,1,0]));
// a.slice(0,3);









