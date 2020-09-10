import React, {Component} from 'react';
import {Nav, NavDropdown,Form, FormControl, Button, Navbar} from 'react-bootstrap';
import About from './About'
//Make a Radio box for Date
class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : false
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }
    
    componentDidMount(){
        console.log("navbar rendering");
    }
    handleClose = () =>{
        this.setState({show: false})
    }
    handleOpen = () =>{
        this.setState({show:true})
    }

    
    render(){
        return(
            <Navbar bg="light" expand="lg" className = "mb-2">
                <About show = {this.state.show} handleClose = {this.handleClose}/>
                <Navbar.Brand href="/">OneShotADay</Navbar.Brand>
            </Navbar>
        )
    }
}
export default NavBar;