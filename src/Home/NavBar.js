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
                <Navbar.Brand href="/">Anime picker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Start new form</Nav.Link>
                        <Nav.Link onClick = {this.handleOpen}>About</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Your past query</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Your past watch list</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Give feed back here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">github</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavBar;