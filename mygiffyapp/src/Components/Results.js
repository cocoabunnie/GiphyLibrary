import React, { Component } from "react"
import ReactDOM from 'react-dom';

//importing components
import SearchFieldComponent from "./SearchFieldComponent";
import GifCard from "./GifCard";

class Results extends Component{
    state = {
        gifs: [],
        title: "No results..."
    }

    componentDidMount(){ //show trending once page loads
        this.showTrending()
    }

    //Function to get trending gif data
    showTrending = () => {
        let myAPI = "rGQfGquBOeYnM9jwCFYyoZBkB5lRWvfy";
        let trendingURL = "http://api.giphy.com/v1/gifs/trending?api_key=" + myAPI;
        fetch(trendingURL)
        .then(response => response.json())
        .then(trendingGifs => {
            this.setState({
                gifs: trendingGifs.data
            })
        })
    }

    //Function allows user to search a term
    searchTerm = () => {
        let myAPI = "rGQfGquBOeYnM9jwCFYyoZBkB5lRWvfy";
        let search = document.getElementById("userInput").value;
        let url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + myAPI;

        fetch(url)
        .then(response => response.json())
        .then(searchResults => {
            this.setState({
                gifs: searchResults.data
            })
        })
    }

    render(){
        const displayedGifs = this.state.gifs.map(gif => <GifCard gif={gif}/>)
        return(
            <div>
                <SearchFieldComponent searchFunction={this.searchTerm}/>
                {displayedGifs}
            </div>
        )
    }
}
export default Results;