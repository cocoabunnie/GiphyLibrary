import React, { Component } from "react"
import ReactDOM from 'react-dom';

//importing components
import SearchFieldComponent from "./SearchFieldComponent";
import GifCard from "./GifCard";

class Results extends Component{
    constructor(){
        super();

        this.state = {
            gifs = []
        }
    }

    render(){
        return(
            <div>
                <SearchFieldComponent />
                <GifCard imageURL=""/>
            </div>
        )
    }
}
export default Results;