import React from 'react'

const FilmItem = ({name, description}) => {
  return(
    <li>
      <div className='card-title'>{name}</div>
      <img src="https://img.moviepostershop.com/totoro-my-neighbor-movie-poster-1988-1010550311.jpg" alt="Boston cream pie."></img>
      <p className='card-content'>{description}</p>
    </li>
  )
}

export default FilmItem
