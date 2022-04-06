import logo from './logo.svg';
import './App.css';
import { UdemyApiFetch } from './components/UdemyApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UdemyApiFetch />
      </header>
    </div>
  );
}

export default App;
