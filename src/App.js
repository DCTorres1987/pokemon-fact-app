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
              aria-label={pokemon}
              role= 'button'
              onClick={(e) => {displayFact(e); playSound(e);}} />   
     
  )
}

function displayFact(e) {

  const selectedPokemon = e.target.alt;
  const pokemonInfo = pokemons[selectedPokemon];
  const optionIndex = Math.floor(Math.random() * pokemonInfo.facts.length);
  const funFact = pokemonInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

function playSound(e) {

  const selectedPokemon = e.target.alt;
  const pokemonSound = pokemons[selectedPokemon];
  const soundsrc = pokemonSound.sound;
  document.getElementById('audio').src = soundsrc;
  let x = document.getElementById('audio');
  x.play();
}

function App() {
  return (

    <div className="App">
      <audio id="audio"></audio>
      <div className='pokemon-header-bar'>
        <h1 className='pokemon-header'>{title || 'Click an pokemon for a fun fact!'}</h1>
        <p id='fact'className='pokemon-fact'></p>
      </div>
        {images}
    </div>
  );
}

export default App;
