// class is a template for objects
// parent class
export class Animal {
    // used when initializing an instance
    constructor(type, legs, sound){
        // 'this' keyword applies to the newly created object
        this.type = type;
        this.legs = legs;
        this.sound = sound;
    }

    // can be used by all instances
    makeNoise() {
        console.log(this.sound);
    }

    // static function - cannot be accessed by the instances. This is only accessed by the class itself
    static giveme5() {
        return 5;
    }

    static isAnimal = true;

    // get method - used to return properties of the instance
    get metadata() {
        return `Type: ${this.type} | Legs: ${this.legs}`;
    }

    get getSound() {
        return this.sound;
    }
}

// instance or an object
let dog = new Animal("mammal", 3, "Arf!");
console.log(dog.type);

// creating a new instance
let cat = new Animal("feline", 4, "Meow!");
console.log(cat.type);

dog.makeNoise();
cat.makeNoise();
// this will cause an error
// Animal.makeNoise();

console.log(Animal.giveme5());

// this will cause an error
// console.log(dog.giveme5());

console.log(Animal.isAnimal);

// get - acts like a property
console.log(cat.metadata);
console.log(dog.metadata);

// this will cause an error
// cat.showColor();