import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="container">
      	<button className="square btn btn-warning" onClick={() => alert('click')}> Click here
        {this.props.value}
      </button>
      </div>
    );
  }
}

export default Header;
