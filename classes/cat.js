import { Animal } from "./animal.js";

// using the extends keyword for inheritance
class Cat extends Animal {
    constructor(type, legs, sound, color) {
        // this.type = type;
        // this.legs = legs;
        // this.sound = sound;
        // super keyword - inherits the constructor from its parent class
        super(type, legs, sound);
        this.color = color;
    }

    showColor() {
        console.log(this.color);
    }
}

// declaring instance of a Cat
let cat = new Cat("Feline", 4, "Meowwww!", "orange");
cat.makeNoise();
cat.showColor();