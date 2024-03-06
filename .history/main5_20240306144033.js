class Pet {
    constructor(name){
        this.name = name ;
    }
    getIntroduce() {
        return `in tôi ra tên là ${this.name}`;
    }
    getTalk() {
        return this.getIntroduce();
    }
}
class Dog extends Pet {
    constructor(name,categoryPet){
        super(name);
        this.categoryPet = categoryPet;
    }
    getCategoryPet(){
        return `Toi la dong vat ${this.categoryPet}`
    }
}