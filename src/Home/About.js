import React, {Component} from 'react';
import {Container, Modal} from 'react-bootstrap';

//Make a Radio box for Date
class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal show = {this.props.show} onHide = {() => this.props.handleClose()}>
                <Modal.Header closeButton> 
                    <Modal.Title>About</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Anime Picker: website that suggest random anime base on your preference, the search parameter ( for now ) is based on
                    the rating, genre the score of other my anime list user and age group of anime
                </Modal.Body>
            </Modal>

        )
    }
}
export default About;