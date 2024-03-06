// Ex Pet và Dog
class Pet {
    constructor(name,sound){
        this.sound = sound;
        this.name = name ;
    }
    getIntroduce() {
        return `in tôi ra tên là ${this.name}`;
    }
    getTalk() {
        return `in ra tiếng kêu  ${this.sound}`
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