import './App.css';
import { pokemons } from './components/pokemons';

const title = '';
const background = <img className="background"
                        src='./images/background.jpg'
                        alt='background' />

const images = [];

for (const pokemon in pokemons ) {

  images.push(
    <img key={pokemon}
         className='pokemon-img'
         alt={pokemon}
         src={pokemons[pokemon].image}
         ariaLabel={pokemon}
         role= 'button' />
  )
}

function App() {
  return (
    <div className="App">
      <div className='pokemon-header-bar'><h1 className='pokemon-header'>{title || 'Click an pokemon for a fun fact!'}</h1></div>
      {background}
      <div className='pokemons'>
        {images}
      </div>
      
    </div>
  );
}

export default App;
