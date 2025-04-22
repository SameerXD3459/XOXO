class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} meows.`);
    }
}

let dog = new Dog("Rex");
let cat = new Cat("Whiskers");

dog.speak();
cat.speak();