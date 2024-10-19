/*
class ToyotaCar {
    start() {
        console.log("start")
    }

    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

console.log(typeof ToyotaCar)
console.log(ToyotaCar)

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

console.log(typeof fortuner)
console.log(fortuner)
*/


/*---------------------------------- Constructor ---------------------------------------------*/
/*
class ToyotaCar {
    constructor(carName, mileage) {
        this.brand = carName;
        this.mileage = mileage;
        console.log(carName, "car created")
    }

    start() {
        console.log("start")
    }

    stop() {
        console.log("stop")
    }
}

let fortuner = new ToyotaCar('Fortuner', 15);
console.log(fortuner);

let lexus = new ToyotaCar('Lexus', 10);
lexus.brand = 'Toyota';
console.log(lexus);
*/


/*---------------------------------- Inheritance ---------------------------------------------*/
/*
class Person {
    constructor() {
        this.species = "Home Sapiens";
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log('solve problems, build something');
    }
}

class Doctor extends Person {};

const prabhakar = new Engineer();
const raushan = new Doctor();

prabhakar.work()
raushan.work()
*/

/*
class Person {
    constructor(name) {
        this.species = "Home Sapiens";
        this.name = name;
    }

    eat() {
        console.log(this.name, "eating");
    }
}

class Engineer extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    work() {
        super.eat()
        console.log('solve problems, build something');
    }
}

const prabhakar = new Engineer('Prabhakar Kumar', 'Computer Science');

prabhakar.work();
console.log(prabhakar)
*/