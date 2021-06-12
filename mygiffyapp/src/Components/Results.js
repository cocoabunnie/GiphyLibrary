import React, { Component } from "react"
import ReactDOM from 'react-dom';

//importing components
import SearchFieldComponent from "./SearchFieldComponent";
import GifCard from "./GifCard";

class Results extends Component{
    constructor(){
        super();

        this.state = {
            gifs: []
        }
    }

    showTrending = () => {
        let myAPI = "rGQfGquBOeYnM9jwCFYyoZBkB5lRWvfy";
        let trendingURL = "http://api.giphy.com/v1/gifs/trending?api_key=" + myAPI;
        fetch(trendingURL)
        .then(response => response.json())
        .then(trendingGifs => {
            this.setState({
                gifs: trendingGifs
            })
            console.log(this.state.gifs);
        })
    }

    render(){
        return(
            <div>
                <SearchFieldComponent searchFunction={this.showTrending}/>
                <GifCard imageURL=""/>
            </div>
        )
    }
}
export default Results;