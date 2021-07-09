import React from 'react'
import './SearchBox.css'
const SearchBox = ({ placeholder, handleChange }) => {

    return (
        <input
            className='search-box'
            type='text'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default SearchBox
