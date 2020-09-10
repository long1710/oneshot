import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import {Jikan} from 'node-myanimelist';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Anime from './Anime'
import './Carousel.css';

class FrontPage extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {
            mangaList : [],
            curPage: 0,
            curIndex: 0,
            loaded: false,
        }
        this.firestore = this.props.firebase.getFS();

        this.imgEl = React.createRef()
        this.getData = this.getData.bind(this);
        this.getMangaList = this.getMangaList.bind(this);
        this.updateCurSlide = this.updateCurSlide.bind(this);
    }

    async componentDidMount() {
        await this.getData();
        await this.getMangaList()
        this.setState({loaded: true})
    }

    async getData() {
        await this.firestore.collection("count").doc("count").get().then((data) => {
          this.setState({
              curPage: data.data().page,
              curIndex: data.data().index
          })
        })
      }
    
    async getMangaList(){
        await Jikan.search().manga({
            type: "oneshot",
            order_by: "score",
            page: 1
        }).then((data) => {
            this.setState({
                mangaList: data.results
            })
        }) 
    }

    updateCurSlide(index) {
        let curIndex = this.state.curIndex;
        if(index !== curIndex) {
            this.setState({curIndex: index})
        }
    }
    render() {
        const {curIndex, mangaList} = this.state
        const results = this.state.loaded ? mangaList.map((manga) => {
            return (
                <div>
                    <img 
                        alt = "" 
                        src = {manga.image_url}
                    />
                </div>
            )
        }) : <div>nothing here</div>
        return (
            this.state.loaded && 
            (
            <Container style = {{ marginTop: '10vh'  }}>
                <Row  style = {{ }}> 
                    <Col className = 'col-md-4' style = {{ }}>
                        <Carousel 
                            selectedItem =  {curIndex}
                            onChange = {this.updateCurSlide}>
                            {results}
                        </Carousel>
                    </Col>

                    <Col className = 'col-lg-8' key = {curIndex}>
                        <Anime 
                            mal_id = {mangaList[curIndex].mal_id}
                        />
                    </Col>

                </Row>
            </Container>
            )
        )
    }
}
export default FrontPage;
