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

var person1 =  {name : 'Nhật Minh',age:12};
var person2 = {name : 'Huu Trung',age:32}

var sayHello = function (){
      console.log('Hello,'+this.name)
}
var sayGoodbye =  function() {
    alert('Goodbye ,'+this.name);
}
// sayHello();
// sayGoodbye();

sayHello.call(person1);
// sayGoodbye.call(person2);
// sayHello.apply(person1);
// sayGoodbye.apply(person2);







