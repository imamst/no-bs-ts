import fetch from "node-fetch";

interface PokemonResultsOverload {
    count: number,
    next?: string;
    previous?: string;
    results: {
        name: string;
        url: string;
    }[];
}

function fetchPokemonOverload(url: string, cb: (data: PokemonResultsOverload) => void): void;
function fetchPokemonOverload(url: string): Promise<PokemonResultsOverload>;

function fetchPokemonOverload(
    url: string,
    cb?: (data: PokemonResultsOverload) => void
): unknown {
    if (cb) {
        fetch(url)
            .then((data) => data.json())
            .then((data) => cb(data as PokemonResultsOverload));
        return;
    } else {
        return fetch(url).then(data => data.json());
    }
}

fetchPokemonOverload("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
    data.results.forEach(({name}) => console.log(name));
});

(async function () {
    const data = await fetchPokemonOverload("https://pokeapi.co/api/v2/pokemon?limit=10");
    data.results.forEach(({name}) => console.log(name));
})()