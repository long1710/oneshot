import React, {Component} from 'react';
import {Mal, Jikan} from 'node-myanimelist';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './Input/FrontPage';
import NavBar from './Home/NavBar'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstAnimeBackGround : ""
    }

  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <BrowserRouter>
            <Route path = "/">
              <FrontPage firebase = {this.props.firebase}/>
            </Route>

        </BrowserRouter>
      </div>
    );
  }
}
export default App;
