import React from 'react';
import ReactDOM from 'react-dom';

function SearchFieldComponent(props){
    return(
        <div class="searchLayout">
            <div class="filterTool">
                <select name="rating" id="selectRating" onChange={props.changeFunction}>
                    <option value="default">All Ratings</option>
                    <option value="g">g</option>
                    <option value="pg">pg</option>
                    <option value="pg-13">pg-13</option>
                    <option value="r">r</option>
                </select>
            </div>

            <div class="searchArea">
                    <input id="userInput" type="text" placeholder="What are you looking for?" />
                    <button onClick={props.searchFunction}>Search</button>
            </div>

            <div class="resultText">
                <p>{props.resultText}</p>
            </div>
        </div>
    )
}
export default SearchFieldComponent;