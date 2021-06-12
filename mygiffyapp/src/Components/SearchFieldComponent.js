import React from 'react';
import ReactDOM from 'react-dom';

function SearchFieldComponent(props){
    return(
        <div>
            <h1>Welcome!</h1>
            <p>What are you looking for?</p>
            <input id="userInput" type="text" placeholder="Type here..." />
            <button onClick={props.searchFunction}>Search</button>
        </div>
    )
}
export default SearchFieldComponent;