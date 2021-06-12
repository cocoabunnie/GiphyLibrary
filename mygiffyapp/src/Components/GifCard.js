import React, { Component } from "react"
import ReactDOM from 'react-dom';

function GifCard(props){
    return (
        <div>
            <img src={props.imageURL} />
        </div>
    )
}