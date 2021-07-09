import React, { useState, useEffect } from 'react';
import SearchBox from './components/searchbox/SearchBox';
import PillContainer from './components/pillcontainer/PillContainer';
import SearchResult from './components/searchresults/SearchResult';
import './App.css';

function App() {
	const [searchKey, setSearchKey] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [movieNotFound, setMovieNotFound] = useState(false)
	const [selectedMovieList, setSelectedMovieList] = useState([])

	const handleChange = (e) => {
		setSearchKey(e.target.value)
	}

	useEffect(() => {
		async function fetchMovies() {
			if (searchKey) {
				setMovieNotFound(false);
				await fetch(`http://www.omdbapi.com/?apikey=4377ad91&s=${searchKey}`)
					.then(resp => resp.json())
					.then(data => {
						console.log("data ====", data)
						if (data.Response === 'False') {
							setSearchResults([])
							setMovieNotFound(true);
							return;
						}
						let updatedMovieList = [...data.Search];
						setSearchResults(updatedMovieList);
						setMovieNotFound(false);
					})
			} else {
				setSearchResults([])
				setMovieNotFound(false);
			}
		}
		fetchMovies()
	}, [searchKey])

	const removeMovie = (title) => {
		let movieList = selectedMovieList.filter(t => t !== title)
		setSelectedMovieList(movieList)
	}

	return (
		<div className="App">
			<h1>Search Your Favourite Movie</h1>
			<div className='search-bar'>
				<div className='pills'>
					{
						selectedMovieList.map((title, index) => (
							<PillContainer
								key={index}
								movieTitle={title}
								removeMovie={removeMovie}
							/>
						)
						)
					}
				</div>
				<SearchBox
					placeholder={"Enter text..."}
					handleChange={handleChange}
				/>
			</div>
			{
				searchResults.map(({ Title }, index) => (
					<SearchResult
						key={index}
						title={Title}
						selectedMovieList={selectedMovieList}
						setSelectedMovieList={setSelectedMovieList}
					/>
				)
				)
			}
			{
				movieNotFound && <p className='not-found'> Movie not found</p>
			}
		</div>
	);
}

export default App;
