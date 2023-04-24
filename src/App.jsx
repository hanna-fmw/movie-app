import './App.css'
import React from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function App() {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState('')

	function getApiData(title) {
		fetch(`https://omdbapi.com/?apikey=15d1e0a0&s=${title}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setMovies(data.Search)
			})
	}

	useEffect(() => {
		getApiData({ search })
	}, [])

	return (
		<div className='w-[414px] bg-[#121B2A] px-1 rounded'>
			<h2 className='text-xl font-medium pt-6 text-white'>Movie Search</h2>
			<header className='h-[88px] py-6 px-4 flex justify-between items-center'>
				<input
					onChange={(e) => setSearch(e.target.value)}
					type='text'
					value={search}
					placeholder='Search Movie'
					className='bg-[#D2353E] text-white rounded-full px-4 py-2 pl-10 w-72 focus:outline-none placeholder-white'
				/>
				<RxMagnifyingGlass onClick={() => getApiData(search)} className='text-white w-[25px] h-[25px] text-semibold' />
			</header>

			<div className='px-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
				{movies.map((movie) => (
					<MovieCard movie={movie} />
				))}
			</div>
		</div>
	)
}

export default App
