// Ex Pet và Dog 
class Pet {
    constructor(name,sound){
        this.sound = sound;
        this.name = name ;
    }
    getIntroduce() {
        return `in tôi ra tên là : ${this.name}`;
    }
    getTalk() {
        return `in ra tiếng kêu : ${this.sound}`
    }
}
class Dog extends Pet {
    constructor(name,sound ,categoryPet){
        super(name,sound);
        this.categoryPet = categoryPet;
    }
    getCategoryPet(){
        return `Toi la dong vat ${this.categoryPet}`
    }
}
//var pet2 = new Pet('pet');
var dog1 = new Dog('dog','gôgogoog','dongvat')

console.log(dog1.getCategoryPet());
console.log(dog1.getIntroduce());
console.log(dog1.getTalk());


// callback array : duyệt mảng và sử dụng callback
// even : chăn , odd : lẻ

const arrNumber = [1,2,5,6,8,10];
let arrEven = [];
let arrOdd = [];
const callback = (number)=>{
    return number%2==0 ? arrEven.push(number):arrOdd.push(number);
}
const checkEvenAndOdd = (arr,callbacks)=>{
     for(key in arr){
        callbacks(arr[key]);
     }
};
checkEvenAndOdd(arrNumber,callback);
console.log(arrEven); // chăn 
console.log(arrOdd); // lẻ

// Chuyển sang dạng class từ slide 36

class Rect {
    constructor(x,y,w,h){
        this.x = x ;
        this.y = y ;
        this.w = w ;
        this.h = h ;
    };
    CalcArea() {
        return this.w * this.h ;
    }
}
var rect =  new Rect(1,2,3,4);
console.log(rect.CalcArea());
console.log(rect.constructor.prototype); // {}

class pro {
    constructor(val){
        this.properties_21 = 'bubble';
        this.properties_3 = val ;
    }
}
var obj = new pro('bub');
console.log(obj.properties_3); // 'bub';
console.log(obj.properties_2);





