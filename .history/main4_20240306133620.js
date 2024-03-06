// Closure scope 
var sayBye = function (name) {
    var text = 'Bye ,' + name ;
    return () =>{
        console.log(text);
    }
}
sayBye("Hello");
var calldMe =  sayBye('Hello');
calldMe();

// Curry
function add(a,b,c){
    return a+b+c;
}
console.log(add(1,2,3));

function addCurries(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = add2(4);
console.log(ad3);




