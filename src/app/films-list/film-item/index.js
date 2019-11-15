import React from 'react'

const FilmItem = (film) => {
  const {title, description, director, producer, release_date} = film
  return(
    <li>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <img src="https://img.moviepostershop.com/totoro-my-neighbor-movie-poster-1988-1010550311.jpg" alt="Boston cream pie."></img>
        <div className='card-content'>
          <label className='card-label'>Director: </label>
          <span className='card-span'>{director}</span>
          <br/>
          <label className='card-label'>Producer: </label>
          <span className='card-span'>{producer}</span>
          <br/>
          <label className='card-label'>Year: </label>
          <span className='card-span'>{release_date}</span>
        </div>
        <p className='card-description'>{description}</p>
      </div>
    </li>
  )
}

export default FilmItem
