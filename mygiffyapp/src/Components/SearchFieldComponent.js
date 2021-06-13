import React from 'react';
import ReactDOM from 'react-dom';

function SearchFieldComponent(props){
    return(
        <div>
            <h1>Welcome!</h1>
            <p>What are you looking for?</p>
            <select name="rating" id="selectRating" onChange={props.changeFunction}>
                <option value="default">Filter By Rating</option>
                <option value="g">g</option>
                <option value="pg">pg</option>
                <option value="pg-13">pg-13</option>
                <option value="r">r</option>
            </select>
            <input id="userInput" type="text" placeholder="Type here..." />
            <button onClick={props.searchFunction}>Search</button>
            <p>{props.resultText}</p>
        </div>
    )
}
export default SearchFieldComponent;