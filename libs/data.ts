const fetchPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(
        (response) => response.json()
    );

    return { res };
};

export { fetchPokemons };
