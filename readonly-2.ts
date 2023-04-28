class Doggy {
    constructor(public readonly name: string, public age: number) {}
}

const blackie = new Doggy("Blackie", 8)
// blackie.name = "Blackiey" // can't because its private property
console.log(blackie.name)

class DogList {
    private doggies: Doggy[] = []

    // make singleton
    static instance: DogList = new DogList()

    // prevent another instance declared
    private constructor() {}

    // non-static
    // public addDog(dog: Doggy) {
    //     this.doggies.push(dog)
    // }

    static addDog(dog: Doggy) {
        DogList.instance.doggies.push(dog)
    }

    getDogs() {
        return this.doggies
    }
}

// DogList.instance.addDog(blackie) // if using non-static addDog method
DogList.addDog(blackie) // if using static addDog method
console.log(DogList.instance.getDogs())

// it should not allowed to create another instance of DogList
// so we need to define private constructor
// const dl = new DogList(); // prohibited