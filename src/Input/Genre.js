import React, {Component} from 'react';
import {Container, Form, Button, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import Mal from 'node-myanimelist';
import './Genre.css';
//Make a Radio box for Genre
class Genre extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: "genre",
            genreChosen: [],
            moreThanTreeGenre: false
        }
        this.genre = {
            "action": Mal.types.AnimeGenre.action, 
            "adventure" : Mal.types.AnimeGenre.adventure, 
            "comedy": Mal.types.AnimeGenre.comedy, 
            "drama": Mal.types.AnimeGenre.drama, 
            "slice of life": Mal.types.AnimeGenre.sliceOfLife
        };
    }

    
    handleSubmit = (e) => {
        let animeGenreChosen = [];
        this.state.genreChosen.forEach(item => {
            animeGenreChosen.push(this.genre[item]);
        })
        this.props.onFormChange(animeGenreChosen);
        e.preventDefault();
    }
    handleChange = (genre) => {

        let genreChosen = this.state.genreChosen;
        if(genreChosen.includes(genre)){
            let index = genreChosen.indexOf(genre);
            genreChosen.splice(index, 1);
        } else{
            genreChosen.push(genre);
        }

        if(genreChosen.length > 3){
            this.setState({genreChosen, moreThanTreeGenre: true});
        } else {
            this.setState({genreChosen, moreThanTreeGenre: false});
        }
    }
    render(){
        let genre = Object.keys(this.genre).map((item, value) => {
            return(
                <Form.Check         
                    className = "wrapper"      
                    type = "checkbox"
                    id = {item}
                    name = "genre"
                    inline
                    label = {item}
                    onChange = {() => this.handleChange(item)}
                />
            )
        })

        let list = this.state.genreChosen.map(item => {
            return(
                <ListGroupItem>{item}</ListGroupItem>
            )
        })
        return(
            <Container className = "cover" >
                {/*<Container className = "list_cover">
                    <Row className = "list_title" lg = {{span:8, offset: 0}} md = {{span:8, offset: 0}}>
                        <h4> list of genre chosen</h4>
                    </Row>
                    <Row className = "list_item" lg = {{span:8, offset: 0}} md = {{span:8, offset: 0}}>
                        <ListGroup horizontal>
                                {list}
                        </ListGroup>
                    </Row>
                </Container>*/}
                <Row className = "Form_Row">
                    <Col lg = {{span:8, offset: 2}} md = {{span:8, offset: 2}}>
                        <Form className = "Form">
                            {genre}
                            <br></br>
                            <Button className = "mt-2 mb-1" type = "submit" disabled = {this.state.moreThanTreeGenre} onClick = {this.handleSubmit}>
                                Next
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Genre;