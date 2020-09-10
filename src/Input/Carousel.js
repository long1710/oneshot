import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';

export default (props) => (
    <div style = {{width: '30%', margin: 'auto'}}>
        <Carousel selectedItem =  {5}>
            {props.results}
        </Carousel>
    </div>
);
