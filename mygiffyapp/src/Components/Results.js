import React, { Component } from "react"
import ReactDOM from 'react-dom';
import SearchFieldComponent from "./SearchFieldComponent";
import GifCard from "./GifCard";

class Results extends Component{
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