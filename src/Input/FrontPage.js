import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import Mal from 'node-myanimelist';

class FrontPage extends React.Component{ 
    constructor(props) {
        super(props);
        this.curOneShot = 0;
        this.curPage = 0;
        this.mangaList = [];
        this.oldMangaList = [];

    }

    componentDidMount() {
        
    }

    getNextBatch() {
        Mal.search().manga({
            type: "oneshot",
            start_date: "2010-01-01",
            order_by: "score",
            sort: "desc",
            page: this.curPage
        }.then((doc) => {
            this.mangaList = doc.data
        }))

        this.curPage += 1;
    }

    render() {
        return (
            <div>
                

            </div>
        )
    }
}
export default FrontPage;
