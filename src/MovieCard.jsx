import React from 'react'

function MovieCard({ movie }) {
	return (
		<div>
			<div key={movie.imdbID} className='bg-[#121B2A] rounded-lg overflow-hidden shadow-md flex flex-col items-center'>
				<img src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/' : movie.Poster} alt={movie.Title} />
				<div className='p-4 flex-1 flex flex-col '>
					<h2 className='text-sm text-white text-left font-medium'>{movie.Title}</h2>
					<p className='text-xs text-[#6b7381] text-left'>{movie.Year}</p>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
