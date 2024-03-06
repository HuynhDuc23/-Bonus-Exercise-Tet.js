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