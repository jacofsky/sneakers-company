import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar.js'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a nuestra tienda!"/>
      </div>
    );
  }
  
}

export default App;
