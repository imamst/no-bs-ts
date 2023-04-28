// what problem did it solve?
// modify existing type to construct new type

// below is type composed with one required field and rest flexible field
// # 1
// type MyFlexibleDogInfo = {
//     name: string
// } & Record<string, string>

// # 2
type MyFlexibleDogInfo = {
    name: string,
    [key: string]: string | number,
}

const dog: MyFlexibleDogInfo = {
    name: "LG",
    breed: "Mutt"
}

// --------------------------

interface DogInfo {
    name: string,
    age: number
}

type OptionsFlags<Type> = {
    // reassign all field type to "boolean"
    [Property in keyof Type]: boolean;
}

type DogInfoOptions = OptionsFlags<DogInfo>;

// --------------------------
// REAL EXAMPLE
// --------------------------
type Listeners<Type> = {
    // "as" will rename the property
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
            newValue: Type[Property] // get type of object property
        ) => void
} & {
    [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void
}

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw "Needs to be implemented";
}

const lg: DogInfo = {
    name: "LG",
    age: 6
}

type DogListeners = Listeners<DogInfo>

listenToObject(lg, {
    onNameChange: (v: string) => {},
    onAgeChange: (v: number) => {}
});