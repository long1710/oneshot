import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import Mal from 'node-myanimelist';
import Date from './Date';
import Genre from './Genre';
import Rated from './Rated';
import TopRating from './TopRating';
import Analyze from '../Analyze/Analyze';


const RatedMap_cons= {
    "<13": "g",
    "13": "pg",
    "13 - 15": "pg13",
    "16 - 17": "r17",
    "18+": "r",
    "no preference": ""
}
const DateStart_cons = {
    "1990 - 2005": '1990-00-00',
    "2005 - 2010": '2005-00-00',
    "2010 - 2015": '2010-00-00',
    "2015 - 2020": '2015-00-00',
    "no preference": ""
}
const DateEnd_cons = {
    "1990 - 2005": '2004-00-00',
    "2005 - 2010": '2009-00-00',
    "2010 - 2015": '2014-00-00',
    "2015 - 2020": '2019-00-00',
    "no preference": ""
}
const TopRating_cons = {
    "yes": 8 ,
    "no": ""
}
//Make a Radio box for Date
class TotalControl2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //search query
            genre:[],
            topRating: "",
            Date: "",
            Rated: "",
            //analyze object
            anime:{
                title: "",
                image_url: "",
                synopsis: ""
            },
            //form control
            currentForm : "Genre",
            loaded: false
        }
        this.listAnime = [];
        this.onFormChange = this.onFormChange.bind(this);
        this.handleRouter = this.handleRouter.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setTopRating = this.setTopRating.bind(this);
        this.setRated = this.setRated.bind(this);
        this.result = this.result.bind(this);

    }
    
    componentDidMount(){
        let animeResult = Mal.anime();
    }
    result = async () => {
        let animeResult = Mal.anime()
        let genre = this.state.genre;
        let topRating = TopRating_cons[this.state.topRating];
        let startDate = DateStart_cons[this.state.Date];
        let endDate = DateEnd_cons[this.state.Date];
        let Rated = RatedMap_cons[this.state.Rated];

        Mal.search().anime({ //search
            genre: genre[0] ? genre[0]: "",
            genre: genre[1] ? genre[1]: "",
            genre: genre[2] ? genre[2]: "",
            score: topRating,
            start_date: startDate,
            end_date: endDate,
            score: topRating,
            rated: Rated
        }).then((data) => {
            this.listAnime = data.data.results;
            this.setState({loaded: true})
        })

        Mal.search().manga({
            type: "oneshot"
        }).then((data) => {
            console.log(data)
        })
    }   
    setDate = (Date) => {
        this.setState({Date}, this.result())
    }
    setRated = (Rated) => {
        this.setState({Rated}, this.result())
    }
    setTopRating = (topRating) => {
        this.setState({topRating}, this.result())
    }

    onFormChange = (value) => {
        switch(this.state.currentForm){
            case 'Genre':
                this.setState({
                    currentForm : "Date",
                    genre: value
                }, () => this.result());
                break;
            case 'Date':
                this.setState({
                    currentForm : "Rated",
                    Date: value
                }, () => this.result());
                break;
            case 'Rated': 
                this.setState({
                    currentForm : "TopRating",
                    Rated: value
                }, () => this.result());
                break;
            case 'TopRating':
                this.setState({
                    currentForm : "Analyze",
                    topRating: value
                });
                break;
            default:
                break;
        }
    }
    handleRouter = () => {
        console.log("call")
        switch(this.state.currentForm){
            case 'Genre':
                return <Genre 
                    onFormChange = {this.onFormChange} 
                    />  
            case 'Date':
                return <Date 
                    onFormChange = {this.onFormChange}
                    setDate = {this.setDate}
                    /> 
            case 'Rated':
                return <Rated
                    onFormChange = {this.onFormChange}
                    setRated = {this.setRated}
                     />
            case 'TopRating':
                return <TopRating  
                    onFormChange = {this.onFormChange}
                    setTopRating = {this.setTopRating}
                    />
            default:
                return null;
        }
    }
    render(){
        let currentPage = this.handleRouter();
        /*if(this.state.currentForm == "Analyze" && this.state.loaded){
            currentPage = <Analyze
                title = {this.state.anime.title != "" ? this.state.anime.title: "no anime found, try ORA ORA instead"}
                image_url = {this.state.anime.image_url != "" ? this.state.anime.image_url: "https://cdn.myanimelist.net/images/anime/11/55267l.jpg" }
                synopsis = {this.state.anime.synopsis != "" ? this.state.anime.synopsis: "ORA ORA ORA ORA ORA ORA ORA ORA"}

            />
        }*/
        return(
            <Container>
                <Row>
                    <Col>
                        {currentPage}
                    </Col>

                    <Col>
                        {this.state.loaded && <Analyze
                            listAnime = {this.listAnime}
                        />}
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default TotalControl2;