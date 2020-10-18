import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

// styles
import './css/App.scss';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main />
      </BrowserRouter>

    </div>
  );
}

export default App;
