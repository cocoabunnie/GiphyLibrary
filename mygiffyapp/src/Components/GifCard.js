import React, { Component } from "react"
import ReactDOM from 'react-dom';

function GifCard(props){
    return (
        <div>
            <img src={props.gif.images.downsized.url} />
        </div>
    )
} export default GifCard;