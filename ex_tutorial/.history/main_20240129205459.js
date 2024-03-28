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
//console.log(myFunctionArray4([5,4,3,2,1,0]));
// a.slice(0,3);

function myFunctionArray5(a,n){
    let result = [] ;
    let count = 0 ;
    if(a.length < n){
        for(let i =1 ; i<=a.length ;i++){
             result.push(a[i-1]);
        }
        return result ;
    }
    else {
        for(let i = 1 ; i <= a.length ;i++){
            if(a.length - i == n){
                 count = i ; 
                 break ;
            }
        }
        //console.log(count);
        for(let i = count ;i<a.length;i++){
            // console.log(a[i]); // 4 // 5 // 
            result.push(a[i]);
            
        }
        return result;
    }
}
// console.log(myFunctionArray5([1, 2, 3, 4, 5, 6, 7, 8],3))


function myFunctionArray6(a,b){
    let result = [] ;
    for(let i = 1 ; i <= a.length ;i++){
        if(a[i-1]!==b){
            result.push(a[i-1]);
        }
    }
    return result ;
}
// console.log(myFunctionArray6([1,2,'2'],'2'));

function myfunctionArray7(a){
    return a.length ;
}
// console.log(myfunctionArray7([1,2,3,4]));

function myfucntionArray8(a){
    let count = 0 ;
    for(let i =  0 ; i <a.length ;i++){
        if(a[i]<0){
            count++;
        }
    }
    return count ;
}
// console.log(myfucntionArray8([1,-2,3]));

function sort2(arr){
    let result = [] ;
    for(let i =  arr.sort().length ; i>=1 ;i--){
        result.push(arr[i-1]);
    }
    return result ;
}
//console.log(sort2([1,3,2]));

function sumArray(arr) {

    
    let sum = arr.reduce((acc,currentValue)=>{
         return (acc + currentValue) ;
    },0);
    return sum / arr.length ;
}
console.log(sumArray([2,2,2,2,2]));
function stringLength(arr){
    let longString ="";
    arr.forEach((e)=>{
        if(e.length >= longString.length){
            longString =  e ;
        }
    });
    return longString ;
}
//console.log(stringLength(['I','need','candy']));

function myEvery(arr) {
   let check =  arr.every((e)=>{
        return e === arr[0] ;
    });
    return check ;
}
//console.log(myEvery([1,2,1]));

// obj 
function myFunctionObj(a,b){
    for(let key in a){
        if(key == b){
            return true ;
        }
    }
    return false ;
   
}
// console.log(myFunctionObj({a:1,b:2,c:3},'b'));

function myFunctionObj2(a,b){
    for(let key in a){
        if(key==b && Boolean(a[key])){
            return true ;
        }
    }
    return false ;
}
function myFunction3(a){
   var obj = {};
   obj.key = a ;
   return obj;
}
//console.log(myFunction3('Hello'));

function myFunctionObjTwoObj(a,b){
     var obj = {};
     for(let i = 0 ; i < a.length ;i++){
          obj[a[i]] = b[i] ;
     }
     return obj ;
}

function sumObj(b){
    var sum = 0 ;
    for(let i in b){
       // console.log(b[i])
        sum+=b[i];
    }
    return (sum);
}
// sumObj({a:1,b:2});

 function myFunctionObjtest(obj){
    let obj1 = {} ;
    for(let key in obj){
        if(key !== 'b'){
            obj1[key]=obj[key];
        }
    }
    return obj1;
 }
function myfunctionMuil(a,b){
     for(let i in a){
          a[i] = a[i]*b;
     }
     return a ;
}
//console.log(myfunctionMuil({a:1,b:2},3));

function mySort(a,b){
    t = a.concat(b).sort();
    let arrNew = [];
    for(let i =  0 ; i < t.length ;i++){
       if(t[i]!=t[i+1]){
          arrNew.push(t[i]);
       }
    }
     console.log(arrNew.sort())
}
mySort([-10,22,333,42],[-11,5,22 ,41,42]);

















