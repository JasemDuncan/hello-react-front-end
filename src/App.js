import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Greeting from './components/greetings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>          
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Greeting />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
