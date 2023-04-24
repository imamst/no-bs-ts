// const beforeLoad = "beforeLoad"
// const loading = "loading"
// const loaded = "loaded"

enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
}

const englishLoadingStates = {
    [LoadingState.beforeLoad]: "Before Load"
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeLoad));

// LITERAL TYPES
// Numeric Literals
function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0;
    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1;
    }
    return pip;
}

// console.log(rollDice(4)); // invalid number given

// String Literals
function sendEventAction(name: "addToCart", data: { productId: number }): void;
function sendEventAction(name: "checkout", data: { carCount: number }): void;
function sendEventAction(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEventAction("addToCart", { productId: 2 });
sendEventAction("checkout", { carCount: 10 });