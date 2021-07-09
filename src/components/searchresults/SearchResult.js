import React from 'react'
import './SearchResult.css'

function SearchResult({ index, title, selectedMovieList, setSelectedMovieList }) {
    return (
        <div
            className='search-result'
            key={index}
            onClick={() => selectedMovieList.length < 5 ? setSelectedMovieList([...selectedMovieList, title]) : null}
        >
            {title}
        </div>
    )
}

export default SearchResult
