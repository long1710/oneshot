import React, {Component} from 'react';
import {Container, Form, Button, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';

//Make a Radio box for topRating
class TopRating extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            TopRating: ["yes", "no"],
            ratingChosen: ""
        }
    }

    handleSubmit = (e) => {
        this.props.setTopRating(this.state.ratingChosen);
        this.props.onFormChange();
        e.preventDefault();
    }

    handleChange = (rate) => {
        let rating = this.state.ratingChosen;
        rating = rate;
        this.setState({ratingChosen: rate});
    }

    render(){
        //Do you wish to follow the top rating of the mass ?
        //Below is the topRating you have chosen
        let topRating = this.state.TopRating.map(item => {
            return(
                <Form.Check
                    className = "wrapper"
                    inline
                    type = "radio"
                    id = {item}
                    name = "TopRating"
                    label = {item}
                    onChange = {() => this.handleChange(item)}
                />
            )
        })
        let list = this.state.ratingChosen != ""? <ListGroupItem>{this.state.ratingChosen}</ListGroupItem>: null;
        return(
        <Container className = "cover" >
            <Container className = "list_cover">
                <Row className = "list_title" lg = {{span:8, offset: 0}} md = {{span:8, offset: 0}}>
                    <h4>include top anime score ? </h4>
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
                        <h1> Search anime by My Anime List user rating</h1>
                        {topRating}
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

export default TopRating;