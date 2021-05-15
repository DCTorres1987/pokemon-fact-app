import './App.css';
import { pokemons } from './components/pokemons';

const title = '';

const images = [];

for (const pokemon in pokemons ) {

  images.push(
    <img key={pokemon}
         className='pokemon-img'
         alt={pokemon}
         src={pokemons[pokemon].image}
         ariaLabel={pokemon}
         role= 'button'
         onClick={displayFact} />
  )
}

function displayFact(e) {

  const selectedPokemon = e.target.alt;
  const pokemonInfo = pokemons[selectedPokemon];
  const optionIndex = Math.floor(Math.random() * pokemonInfo.facts.length);
  const funFact = pokemonInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

function App() {
  return (
    <div className="App">
      <div className='pokemon-header-bar'>
        <h1 className='pokemon-header'>{title || 'Click an pokemon for a fun fact!'}</h1>
        <p id='fact'className='pokemon-fact'></p>
      </div>
      <div className='pokemons'>
        {images}
      </div>
    </div>
  );
}

export default App;
