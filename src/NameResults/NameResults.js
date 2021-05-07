import React from 'react'
import NameBox from './NameBox/NameBox';
import './NameResult.css';

export default function NameResults({suggestedNames}) {
    return (
        <div className="nameresults-container">
            {suggestedNames.map(suggestedName => <NameBox name={suggestedName} />)}
        </div>
    )
}
