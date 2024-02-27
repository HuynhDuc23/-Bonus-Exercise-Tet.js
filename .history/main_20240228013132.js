// // toán tử 3 ngôi 
// const x =  1000 ;
// let result ;
// if(x<1000){
//     console.log('Nhỏ Hơn 1000');
// }
// else {
//     console.log('Lớn Hơn Hoặc Bằng 1000');
// }
// // Rút gọn
// const x2 =  1000 ;
// let result2 =  (x2 < 1000)?"Nhở Hơn 1000":"Lớn Hơn Hoặc Bằng 1000";
// console.log(result2);


// // Shorthand evualated
// // let variable2 ;
// // if(variable1 !== null || variable1 !== undefined || variable1 !== ''){
// //     variable2 = variable1 ;
// // }
// // else {
// //     variable1 = "";
// // }

// const variable2 = variable1 || "";

// // let x1 ;
// // let y ;
// // let z = 3 ;

// let x1 , y ,z = 3;

// // variable declaration
// if(isTurnOn === true){

// };
// if(isTurnOn){

// }

// // for loop
// for(let i = 0 ; i<sampleArray.length ;i++){

// }
// for(let item in sampleArray){

// }

// for (let i = 0 ; i< 10000 ;i++){

// }
// for(let i = 0 ; i<1e5;i++){

// }
// 1e0 = 1;
// 1e1 === 10 ;
// 1e2 === 100;
// 1e3 === 1000 ;
// 1e4===10000;
// 1e5=== 100000;

// // obj property

// const x3 = 1 , y3 = 2;
// const obj = { x : x3 , y :y3};
// // ES6 cung cap cho ta kha nang gan property cho obj de dang hon . Neu ten Key trung luon voi ten bien

// const y4 =  1 , y5 = 2 ;
// const obj2 = {y4,y5}


// // arrows function
// function sayHello(name){
//     console.log("Hello ",name);
// }

// sayHello2 = name => console.log('Hello',name)
// sayHello2('Duc')

// setTimeout(function(){
//     console.log("Hello");
// },2000);

// setTimeout(()=>console.log("Hello"),2000);

// function getValue(ratio){
//     return ratio * 6.9
// }

// getValue = ratio => ratio * 6.9;
// console.log(getValue(0))

// // set default values parameters

// function getTotal(a,b,c){
//     if(a=== undefined){
//         a=3;
//     }
//     if(b==undefined){
//         b=4
//     }
//     return a +  b +c ;
// }
// console.log(getTotal())

// getTotal2 =  (a=2,b=3,c=4)=> (a+b+c);
// console.log(getTotal2());


// // backtick 
// const welcome = `You Have Logged in as ${first} ${last}`;


// // destructuring assignment

// const action  = require('lib/action')
// const service = require('lib/service')

// import {action , service} from 'lib';

// // const from = this.props.form ;
// // const errors =  this.props.errors ;
// // const component = this.props.component ;
// const {form , errors , component} = this.props ;

// spread Opertor
// joining array

// const old = [1,2,3];
// const number =  [3,4,5].concat(old);

// // spred 
// // const number2 = [3,4,5,...old] ;
// // console.log(number2)

// // cloning arrays

//  const arr = [1,2,3];
// // const newArr = arr.slice();
// // console.log(newArr);
// const newArr = [...arr];
// console.log(newArr);


// Constraint Param  
function sample (param1){
    if(param1=== undefined){
        throw new Error('Thieu Tham So Param1');
    }
    return param1 ;
}




