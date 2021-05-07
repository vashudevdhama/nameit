import React from 'react';
import './Header.css';
import SearchBar from './SearchBar/SearchBar';

function Header({handleInputText}){
    const [extended, setExtended] = React.useState(true);
    const handleInputChange = (value) => {
        let checkExtended = !value;
        setExtended(checkExtended);
        handleInputText(value);
    }
    return (
        <div className="header-container">
            <h1 className={`${extended ? 'extended' : 'compressed'}`}>Name IT</h1>
            <SearchBar handleInputChange={handleInputChange} />
        </div>
    )
}

export default Header;