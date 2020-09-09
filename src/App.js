import React, {Component} from 'react';
import {Mal, Jikan} from 'node-myanimelist';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './Input/FrontPage';
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

  async componentDidMount(){
    Jikan.search().manga({
      type: "oneshot",
      order_by: "score",
      page: 2
    }).then((data) => {
      console.log(data)
    })
    const firestore = this.props.firebase.getFS();

    await firestore.collection("count").doc("count").get().then((data) => {
      console.log(data.data())
    })
    console.log("end");
  }
  render(){
    return (
      <div className="App">
        <NavBar/>
        <BrowserRouter>
            <Route path = "/">
              <FrontPage/>
            </Route>

        </BrowserRouter>
      </div>
    );
  }
}
export default App;
