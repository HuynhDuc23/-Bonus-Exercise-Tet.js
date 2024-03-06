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
