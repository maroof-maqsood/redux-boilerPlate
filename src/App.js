import './App.css';
import React from 'react'
import Home from './Containers/Home'



class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="hed1">Redux in detail</h1>
        <Home />
      </div>
    )
  }
}

export default  App;
