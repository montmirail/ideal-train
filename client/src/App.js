import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPages';
import Fib from './Fib';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <header className="App-header">
                  <Link to="/">Home</Link>
                  <Link to="/otherpage">Other Page</Link>
              </header>

              <div>
                  <Route exact path="/" component={Fib} />
                  <Route path="/otherpage" compoment={OtherPage}/>
              </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
