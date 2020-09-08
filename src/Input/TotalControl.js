import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import Mal from 'node-myanimelist';

class TotalControl2 extends React.Component{ 
    constructor(props) {
        super(props);
        let mangaList = [];
    }

    componentDidMount() {
        /*console.log(Mal)
        Mal.search().manga({
            type: "oneshot",
            start_date: "2010-01-01",
            order_by: "score",
            sort: "desc",
            page: 2,
        }).then((data) => {
            console.log(data)
        })*/
    }

    render() {
        return (
            <div>
                hello

            </div>
        )
    }
}
export default TotalControl2;
