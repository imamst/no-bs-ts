abstract class StreetFighter {
    constructor() {}

    move() {}
    fight() {
        console.log(`${this.name} attack with ${this.getSpecialAttack()}`)
    }

    abstract getSpecialAttack(): string;
    abstract get name(): string;
}

class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return "Hadoken";
    }

    get name(): string {
        return "Ryu";
    }
}

// const ryu = new StreetFighter(); // can't instantiate abstract class

const ryu = new Ryu;
ryu.fight()