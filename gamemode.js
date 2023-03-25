// instantiation
class Player{
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Salut, sunt ${this.name}, sunt ${this.type} !`)
    }
}

class Mage extends Player{
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Huaaa, sa-i rupem ba ${this.type}`);
    }
}

const Mage1 = new Mage(`Ion`, `fire`);
const Mage2 = new Mage(`Andra`, `healer`);

class Animal{
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    introduce(){
        console.log(`mooo i am a ${this.type}, my name is ${this.name}, I a ${this.type}.`)
    }
}

class Mamal extends Animal{
    constructor(name, type, color) {
        super(name, type, color);
    }
    moo (){
        console.log(` mooo ${this.type}, ${this.name}, ${this.color}`);
    }
}

const cow1 = new Mamal(`Virginica` , `laptareasa`, `maro`);
const cow2 = new Mamal(`andra`, `carne`, `alb`);