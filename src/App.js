import React, {Component} from 'react';
import {Mal, Jikan} from 'node-myanimelist';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TotalControl from './Input/TotalControl';
import About from './Home/About';
import NavBar from './Home/NavBar'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstAnimeBackGround : ""
    }
  }
  componentDidMount(){
    Jikan.search().manga({
      type: "oneshot"
    }).then((data) => {
      console.log(data)
    })
  
    /*Mal.anime(20899).info().then((data) => {  
        console.log(data.data);
    })
    
    Mal.search().manga({
      type: "oneshot"
    }).then((data) => {
      console.log(data)
  })*/

  }
  render(){
    return (
      <div className="App">
        <NavBar/>
        <BrowserRouter>
            <Route path = "/">
              <TotalControl/>
            </Route>

        </BrowserRouter>
      </div>
    );
  }
}
export default App;
