import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
