import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <NavBar title="API app"/>
      <News/>
    </div>
  );
}

export default App;
