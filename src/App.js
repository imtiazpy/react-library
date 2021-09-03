import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Search />
      </header>
    </div>
  );
}

export default App;
