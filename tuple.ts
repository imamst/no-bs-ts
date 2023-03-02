type ThreeCoordinate = [x: number, y: number, z: number];

function add3dCoordinate(
    c1: ThreeCoordinate,
    c2: ThreeCoordinate
): ThreeCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2]
    ];
}

console.log(add3dCoordinate([0,100,0], [10,20,30]));

function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ];
}

const [str1, setStr1] = simpleStringState("hello");
console.log(str1());
setStr1("goodbye");
console.log(str1());