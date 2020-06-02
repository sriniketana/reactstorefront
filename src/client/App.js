import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header></Header>
          <div style={{ marginTop: '4em', width: '100%', height: '100%' }}>
            <Switch>
              <Route path="/catalog" style={{ color: '#ffffff' }}>
                <Catalog></Catalog>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
