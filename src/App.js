import logo from './logo.svg';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';

const hardCodedTrackList = [{
  id: 1,
  name: 'baby baby',
  artist: 'll-cool-j',
  album:'All Gone', 
},
{
  id:2,
  name: 'Hey now',
  artist: 'weeey',
  album: 'From New York', 
}

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SearchBarContainer />

      </header>
    </div>
  );
}

export default App;
