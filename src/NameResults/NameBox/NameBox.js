import React from 'react';
import './NameBox.css';

const url = 'https://www.namecheap.com/domains/registration/results/?domain=';

export default function NameBox({name}) {
    return (
        <a href={`${url}${name}`} className="namebox-container" target="_blank" rel="noreferrer">
            {name}
        </a>
    )
}
