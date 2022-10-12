import React, { useState } from 'react';

const SearchBar = (props) => {

const [searchTerm, setSearchTerm] = useState('');

    return (
        <form onSubmit={searchSongs}>
            <input placeholder='Search Movies' type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit' >Search</button>
        </form>>
    );
}

export default SearchBar;