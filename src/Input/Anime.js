import React, {Component} from 'react';
import {Jikan} from 'node-myanimelist';
import {Container, Row, Col} from 'react-bootstrap'
import './Anime.css'

class Anime extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
        }

        this.dataToString = this.dataToString.bind(this);
    }

    async componentDidMount() {
        await Jikan.manga(this.props.mal_id).info().then(data => {
            this.setState({data})
        })
        this.setState({loaded: true})
    }

    dataToString(items){
        let stringItem = "";
        items.forEach(item => {
            stringItem = stringItem + ", " + item.name
        })
        return stringItem.substring(1);
    }
    
    render() {

        const {data} = this.state;
        let [genre, serializations, authors] = ["", "", ""]
        if(this.state.loaded) {
            [genre, serializations, authors] = [this.dataToString(data.genres), this.dataToString(data.serializations), this.dataToString(data.authors)]
            //console.log(genre)
        }
        return(
            <div style = {{}}>
                {this.state.loaded && (
                <ul className = "information">
                    <h1 style = {{'border-bottom': 'solid'}}> {data.title}</h1>
                    <li><b>Rating: </b> {data.score}</li>
                    <li><b>Genres: </b>{genre}</li>
                    <li><b>Serialize: </b>{serializations}</li>
                    <li><b>Authors: </b>{authors}</li>
                    <li><b>Synopsis: </b>{data.synopsis}</li>
                </ul> 
                )}

                {!this.state.loaded && (
                <div>
                    <h1>loading</h1>
                </div>
                )}
            </div>
        )
    }
}

export default Anime