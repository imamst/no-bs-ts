// function create function
function myLogFunction() {
    return (str: string) => {
        console.log(str)
    }
}

const logger = myLogFunction();
logger("your string");

// function create class
function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: string = "";
        
        log(str1: string) {
            console.log(str1);
            this.completeLog += str1 + "\n";
        }

        dumpLog() {
            return this.completeLog;
        }
    }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("Foo");
console.log(logger2.dumpLog());

// function create generic class
function CreateSimpleMemoryDatabase<T>() {
    return class SimpleMemoryDatabase {
        private db: Record<string, T> = {};

        set(id: string, value: T) {
            this.db[id] = value;
        }

        get(id: string): T {
            return this.db[id];
        }

        getObject(): object {
            return this.db;
        }
    }
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const sbd1 = new StringDatabase();
sbd1.set("foo", "Hello");

// creating mixin
type Constructor<T> = new (...args: any[]) => T;

function Dumpable<
        T extends Constructor<{ getObject(): object;}>
    >(Base: T) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject());
        }
    }
}

const DumpableStringDatabase = Dumpable(StringDatabase)
const sbd2 = new DumpableStringDatabase()
sbd2.set("jack", "Hello jack")
sbd2.dump();

// ## from LogRocket
// ## https://blog.logrocket.com/typescript-mixins-examples-and-use-cases/
interface Car {
    steering: number,
    tyre: number,
}

// intercace will be merged, called "declaration merging"
interface Car {
    exhaustOutlet: number
}

const BMW: Car = {
    exhaustOutlet: 2,
    steering: 1,
    tyre: 4,
}

// base class where mixin be applied
class Block {
    name = "";
    length = 0;
    breadth = 0;
    height = 0;

    constructor(name: string, length: number, breadth: number, height: number) {
        this.name = name;
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
}

// class that extend base class
class Moulder {
    moulding = true;
    done = false;
    
    mould() {
        this.moulding = false;
        this.done = true;
    }
}

class Stacker {
    stacking = true;
    done = false;

    stack() {
        this.stacking = false
        this.done = true
    }
}

// this interface will extends and merging with previous Block class
interface Block extends Moulder, Stacker {}
// if using class will error, cant extend multiple
// class Block extends Moulder, Stacker{
//     constructor() {
//        super()
//     }
// }

function applyMixins(derivedCtor: any, constructor: any[]) {
    constructor.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                    Object.create(null)
            )
        })
    })
}

applyMixins(Block, [Moulder, Stacker])

let cube = new Block("cube", 4, 4, 4);
cube.mould();
cube.stack();
console.log(cube.length, cube.breadth, cube.height, cube.name, cube.moulding, cube.stacking)