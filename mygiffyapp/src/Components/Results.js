import React, { Component } from "react"
import ReactDOM from 'react-dom';

//importing components
import SearchFieldComponent from "./SearchFieldComponent";
import GifCard from "./GifCard";
import Header from "./PageTitle";

class Results extends Component{
    state = {
        displayedgifs: [],
        totalgifs: [],
        title: "No results...",
        currentSearch: ""
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
            console.log(trendingGifs);
            this.setState({
                displayedgifs: trendingGifs.data,
                title: "Here's What's Currently Trending!"
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
                displayedgifs: searchResults.data,
                totalgifs: searchResults.data,
                title: "Search results for " + "\"" + search + "\"...",
                currentSearch: search
            })
        })
    }

    //Getting the ratings of GIFS
    getRatings = () => {
        let filter = document.getElementById("selectRating").value;
        let newArray = [];
        let array = this.state.totalgifs;

        if (filter == "default"){
            this.setState({displayedgifs: array});
        } else {
            array.map((gif) => {
                if (gif.rating == filter){
                    newArray.push(gif);
                }
            })
    
            this.setState({displayedgifs: newArray});
        }
    }

    render(){
        const displayedGifs = this.state.displayedgifs.map(gif => <GifCard gif={gif}/>)
        return(
            <div>
                <Header/>
                <SearchFieldComponent 
                searchFunction={this.searchTerm} 
                resultText={this.state.title} 
                changeFunction={this.getRatings}
                />

                <div class="gifs">
                    {displayedGifs}
                </div>
                
            </div>
        )
    }
}
export default Results;