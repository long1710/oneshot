import React, {Component} from 'react';
import {Container, Form, Button, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Genre.css';


//Make a Radio box for Date
class Date extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dateList: ["1990 - 2005", "2005 - 2010", "2010 - 2015", "2015 - 2020", "no preference"],
            dateChosen: ""
        }
    }

    handleSubmit = (e) => {
        this.props.setDate(this.state.dateChosen);
        this.props.onFormChange();
        e.preventDefault();
    }
    
    handleChange = (date) => {
        let dated = this.state.dateChosen;
        if(date == "no preference")
            dated = "";
        else
            dated = date;
        this.setState({dateChosen: dated});
    }
    
    render(){
        let date = this.state.dateList.map(item => {
            return(
                <Form.Check
                    className = "wrapper"  
                    inline
                    type = "radio"
                    id = {item}
                    name = "Date"
                    label = {item}
                    onChange = {() => this.handleChange(item)}
                />
            )
        })
        let list = this.state.dateChosen != ""? <ListGroupItem>{this.state.dateChosen}</ListGroupItem>: null;
        return(
            <Container className = "cover" >
                <Container className = "list_cover">
                    <Row className = "list_title" lg = {{span:8, offset: 0}} md = {{span:8, offset: 0}}>
                        <h4> time chosen</h4>
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
                            <h1>search anime by year</h1>
                            {date}
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
export default Date;