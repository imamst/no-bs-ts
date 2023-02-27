function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? ' with' + extra : ''}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something else");

interface User {
    id: string;
    info?: {
        email?: string;
    };
}

function getEmail(user: User): string {
    return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x,y]);
    callback?.();
}