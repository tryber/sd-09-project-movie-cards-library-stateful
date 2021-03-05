import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="divBusca">
        <img src="search3.png" alt="Buscar..." />
        <input type="text" className="txtBusca" placeholder="Buscar..." />
        <button className="btnBusca" type="submit">Buscar</button>
      </div>
    );
  }
}
