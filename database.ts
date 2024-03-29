interface Database<T, K> {
    get(id: K): T;
    set(id: K, value: T): void;
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

type DbType = string | number | symbol;

class InMemoryDatabase<T, K extends DbType> implements Database<T, K> {
    protected db: Record<K, T> = {} as Record<K, T>;
    
    get(id: K): T {
        return this.db[id];
    }
    
    set(id: K, value: T): void {
        this.db[id] = value;
    }
}

class PersistentMemoryDB<T, K extends DbType> extends InMemoryDatabase<T, K> implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db);
    }

    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}

const myDB = new PersistentMemoryDB<number, string>();
myDB.set("foo", 33);
// myDB.db["foo"] = "baz";
console.log(myDB.get("foo"));
const savedDB = myDB.saveToString();
myDB.set("foo", 53);
console.log(myDB.get("foo"));

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(savedDB);
console.log(myDB2.get("foo"));