import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Views/Home/Home.js'
import Detalle from './Views/Detalle/Detalle.js'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detalle/:id" component={Detalle}/>

          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
