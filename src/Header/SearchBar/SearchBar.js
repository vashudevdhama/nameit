import React from 'react';
import './SearchBar.css';

function SearchBar({handleInputChange}){
    return (
        <div className="searchbar-container">
            <input className="searchbar" type="text" onChange={(e) => handleInputChange(e.target.value)} placeholder="Type here..."/>
        </div>
    )
}

export default SearchBar;