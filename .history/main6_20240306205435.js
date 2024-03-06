// Ex Pet và Dog
class Pet {
    constructor(name,tiengKeu){
        this.sound = sound;
        this.name = name ;
    }
    getIntroduce() {
        return `in tôi ra tên là ${this.name}`;
    }
    getTalk() {
        return `in ra tiếng kêu  ${this.tiengKeu}`
    }
}
class Dog extends Pet {
    constructor(name,tiengKeu ,categoryPet){
        super(name,tiengKeu);
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