import React, {Component} from 'react';
import {Container, Form, Button, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Genre.css';


//Make a Radio box for Rated
class Rated extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Rated : ["<13", "13", "13 - 15", "16 - 17", "18+", "no preference"],
            Chosen: ""
        }
    }

    handleSubmit = (e) => {
        this.props.setRated(this.state.Chosen);
        this.props.onFormChange();
        e.preventDefault();
    }

    handleChange = (rating) => {
        let Rated = this.state.Chosen;
        if(rating == "no preference")
            Rated = "";
        else
            Rated = rating;
        this.setState({Chosen: Rated});
    }
    render(){
        //Below is the Rate you have chosen
        //Choose the group age you want to filter
        let Rated = this.state.Rated.map(item => {
            return(
                <Form.Check 
                    className = "wrapper"  
                    inline
                    type = "radio"
                    id = {item}
                    name = "rated"
                    label = {item}
                    onChange = {() => this.handleChange(item)}
                />
            )
        })
        let list = this.state.Chosen != ""? <ListGroupItem>{this.state.Chosen}</ListGroupItem>: null;
        return(
            <Container className = "cover" >
                <Container className = "list_cover">
                    <Row className = "list_title" lg = {{span:8, offset: 0}} md = {{span:8, offset: 0}}>
                        <h4> Age group chosen</h4>
                    </Row>
                    <Row className = "list_item" lg = {{span:8, offset: 0}} md = {{span:8, offset: 0}}>
                        <ListGroup horizontal>
                                {list}
                        </ListGroup>
                    </Row>
                </Container>
                <Row className = "Form_Row">
                    <Col lg = {{span:8, offset: 2}} md = {{span:8, offset: 2}}>
                        <Form className = "Form">
                            <h1>  search anime by age group</h1>
                            {Rated}
                            <br></br>
                            <Button type = "submit" disabled = {this.state.moreThanTreeGenre} onClick = {this.handleSubmit}>
                                Next
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Rated;