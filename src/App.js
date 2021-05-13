import './App.css';
// import { pokemons } from '.pokemons';

const title = '';
const background = <img className="background"
                        src='./images/background.jpg'
                        alt='background' />

function App() {
  return (
    <div className="App">
      <h1>{title || 'Click an pokemon for a fun fact'}</h1>
      {background}
      
    </div>
  );
}

export default App;
