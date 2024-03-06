// // Ex Pet và Dog 
// class Pet {
//     constructor(name,sound){
//         this.sound = sound;
//         this.name = name ;
//     }
//     getIntroduce() {
//         return `in tôi ra tên là : ${this.name}`;
//     }
//     getTalk() {
//         return `in ra tiếng kêu : ${this.sound}`
//     }
// }
// class Dog extends Pet {
//     constructor(name,sound ,categoryPet){
//         super(name,sound);
//         this.categoryPet = categoryPet;
//     }
//     getCategoryPet(){
//         return `Toi la dong vat ${this.categoryPet}`
//     }
// }
// //var pet2 = new Pet('pet');
// var dog1 = new Dog('dog','gôgogoog','dongvat')

// console.log(dog1.getCategoryPet());
// console.log(dog1.getIntroduce());
// console.log(dog1.getTalk());


// // callback array : duyệt mảng và sử dụng callback
// // even : chăn , odd : lẻ

// const arrNumber = [1,2,5,6,8,10];
// let arrEven = [];
// let arrOdd = [];
// const callback = (number)=>{
//     return number%2==0 ? arrEven.push(number):arrOdd.push(number);
// }
// const checkEvenAndOdd = (arr,callbacks)=>{
//      for(key in arr){
//         callbacks(arr[key]);
//      }
// };
// checkEvenAndOdd(arrNumber,callback);
// console.log(arrEven); // chăn 
// console.log(arrOdd); // lẻ

// // Chuyển sang dạng class từ slide 36

// class Rect {
//     constructor(x,y,w,h){
//         this.x = x ;
//         this.y = y ;
//         this.w = w ;
//         this.h = h ;
//     };
//     CalcArea() {
//         return this.w * this.h ;
//     }
// }
// var rect =  new Rect(1,2,3,4);
// console.log(rect.CalcArea());
// console.log(rect.constructor.prototype); // {}

// class pro {
//     constructor(val){
//         this.properties_21 = 'bubble';
//         // tự js hiểu có một thuộc tính tên là properties_21
//         this.properties_3 = val ;
//     }
// }
// var obj = new pro('bub');
// console.log(obj.properties_3); // 'bub';
// console.log(obj.properties_21);
// // private properties in js
// class pro2 {
//     constructor(){
//         // var properties_1 = 'buble'; // chỉ sử dụng trong phạm vi constructor
//         this.properties_1 = 'bubb';
//     }
//     getProperties(){
//         return this.properties_1;
//     }
// }
// var obj2 = new pro2();
// console.log(obj2.properties_1); // underfiend 
// console.log(obj2.getProperties());
class Car {
    constructor(){
        this.name = 'Genera; Car';
        this.speed = 0 ;
    }
    setSpeed(speed){
        this.speed = speed ;
        console.log(`Set Speed ${this.speed}`);
    }
    getSpeed(){
        console.log(this.speed);
    }
    setGasLevel(level){
        this.level = level ;
    }
    getGasLevel() {
        if(this.level!=undefined){
            console.log(this.level + '<br/>')
        }
        else{
          console.log("Level Not Defined!"+ '<br/>')  
        }
     }
    fuellinjection(){
        var fuellinjection = 'active';
        return {
            getFuelljectionState(){
                console.log(`injection state ${fuellinjection}`); 
            },
            setFuellnjectionState(state){
               fuellinjection = state;
            }
        }
    }
}
var car =  new Car();
// car.setSpeed(100);
// car.getSpeed();
// car.getGasLevel();
// car.setGasLevel('full');
// car.getGasLevel();
// const obj = car.fuellinjection();
// console.log(obj.getFuelljectionState());
// obj.setFuellnjectionState('passive');
// console.log(obj.getFuelljectionState());

var date = new Date() ;
console.log(date.getDate()+"<br/>");
// sử dụng prototype để chọc vào class 
Date.prototype.getFullDate = function(){
    return "" + this.getDate() + "." + this.getMonth() + "."+this.getFullYear();
}
console.log(date.getFullDate());

// constructor / prototype Pattern
class Person {
    constructor(name,age){
        this.friends = ['Alfred','Alex','Mia','Susan'];
        this.name = name ;
        this.age = age ;
        this.instanceProperty = 'instance property';
    }
    sayAge(){
        console.log(this.name);
    }
    sayName(){
        console.log(this.name);
    }
}
Person.prototype= {
    prototypeProperty :'Prototype Property'
}


var person1 = new Person('Susan',24);
var person2 = new Person('Hermann',23);

//console.log(person1.friends===person2.friends);
// false -> nếu muốn true thid dùng biến static
// vì new tạo ra 2 đối tượng có 2 mảng khác nhau , không liên quan với nhau
// console.log('Friends sayName method:'+ (person1.sayName===person2.sayName)); // true 

// console.log(person1.age===person2.age); // false 

// console.log(person1.sayAge===person2.sayAge); // true;

// person2.prototypeProperty = 'Changed in the other object instance';
// console.log(person1.prototypeProperty+'<br>'); // undefiend ?
// console.log(person2.prototypeProperty+'<br>'); // có data


// person2.instanceProperty = 'Changed in the other object instance';
// console.log(person1.instanceProperty);
// console.log(person2.instanceProperty);


// Prototype in js

// var o1 = {};
// console.log('Data : '+o1.__proto__.constructor.name); // object

// // var o2 = new Object();
// // console.log('Data2 :'+ o2.__proto___constructor.name); // no properties

// var o3 = new String() ;
// console.log(o3.__proto___constructor.name); // cant not read properties


// This doesn't work!
// var o4 = {};
// console.log(o4.prototype.constructor.name); // cant not constructor

// run ok 
// var s =  new String() ;
// String.prototype.sayHi = function() {
//     console.log('say hi!')
// }
// s.sayHi(); // say hi

// console.log(String.prototype.constructor.name);
// // String ??

class Car2 {
    constructor(){
        this.speed = 0 ;
    }
    printSpeed(){
        console.log(this.speed);
    }
    instanceMethod(){
        console.log('An instance method');
    }
}
var car  =  new Car2() ;
// car.speed = 50 ;
// car.printSpeed();
// car.instanceMethod();

// chưa hiểu đoạn cuối

// callback

const myDisplayer = (something) => {
    document.getElementById(".demo").innerHTML = something;
}

const myCalculator =(num1 , num2 , callback) =>{
    let sum = num1 + num2 ;
    callback(sum)
}

myCalculator(5,5,myCalculator);

// done : 6/3/2024


















