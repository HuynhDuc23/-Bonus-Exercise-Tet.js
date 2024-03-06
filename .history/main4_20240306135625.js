// Closure scope 
// var sayBye = function (name) {
//     var text = 'Bye ,' + name ;
//     return () =>{
//         console.log(text);
//     }
// }
// sayBye("Hello");
// var calldMe =  sayBye('Hello');
// calldMe();

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
// console.log(addCurries(1)(2)(3));
// const ad1 = addCurries(1);
// const ad2 = ad1(2);
// const ad3 = add2(4);
// console.log(ad3);

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

// sayHello.call(person1);
// sayGoodbye.call(person2);
// sayHello.apply(person1);
// sayGoodbye.apply(person2);

var checkNumericRange = function(value){
    if(typeof value !== 'number'){
        return false ;
    }
    else {
        return value >= this.minimun && value <=this.maxinmun ;
    }
}
var range = {minimum:10, maximun :20};

var boundCheckNumericTange = checkNumericRange.bind(range);

 var result = boundCHeckNumericRange(12);
 document.write(result);


 function add(v1,v2) {
    return v1+v2;
 }
 function curriedAdd(v2){
    return add(5,v2);
 }

 function fOuter(){
    var x ="Hello";
    function Finner() {
        x = "World";
    }
     Finner();
     return x ;
 }
 console.log(fOuter());

var incrementor = function () {
    var a = 0 ;
    function b () {
        return 2 ;
    }
    return {
        inc : function() {
            return a++;
        }
    }
}

function outerF() {
    var x ="World";
    function innerFsetX(val){
        x = val ;
    }
    return innerFsetX ;
}
var a =  outerF();
a("hello");

function square(width){
    var squareObject = {};
    squareObject.getArea = function() {
        if(width>0){
            return width*width;
        }
    }
    return squareObject ;
}
var myBox = square(5);





