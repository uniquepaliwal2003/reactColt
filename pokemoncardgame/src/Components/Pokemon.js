import './Pokemon.css'
export default function Pokemon(){
    const pokiNum = Math.floor(Math.random()*649+1);
    const pokiUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokiNum}.svg`;
    return(
        <div className="pokemonCard">
            <h1>Pokemon #{pokiNum}</h1>
            <img src={pokiUrl} alt="Pokemon"/>
        </div>
    )
}