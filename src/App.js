import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
