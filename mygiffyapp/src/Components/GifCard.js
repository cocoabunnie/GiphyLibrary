import React, { Component } from "react"
import ReactDOM from 'react-dom';

function GifCard(props){
    return (
        <div>
            <p>Test Image</p>
            <img src={props.imageURL} />
        </div>
    )
} export default GifCard;