interface Cat {
    name: string,
    breed: string,
}

type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadonlyCat {
    return {
        name,
        breed
    }
}

const usul = makeCat("usul", "Tabby")
usul.name = "Piter"

// coordinate
function makeCoordinate(
    x: number, 
    y: number, 
    z: number
): readonly [number, number, number] {
    return [
        x,
        y,
        z
    ]
}

const c1 = makeCoordinate(10, 20, 30)
c1[0] = 44

const reallyConst = [1, 2, 3] as const
reallyConst[2] = 5