import React, { Component } from "react"
import ReactDOM from 'react-dom';

//importing the SearchFieldComponent
import SearchFieldComponent from "./SearchFieldComponent";

class Results extends Component{
    render(){
        return(
            <div>
                <SearchFieldComponent />
            </div>
        )
    }
}
export default Results;