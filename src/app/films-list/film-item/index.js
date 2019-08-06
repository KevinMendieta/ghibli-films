import React from 'react'

const FilmItem = ({name, description}) => {
  return(
    <li>
      <p>{name}</p>
      <img src="https://img.moviepostershop.com/totoro-my-neighbor-movie-poster-1988-1010550311.jpg" alt="Boston cream pie."></img>
      <p>{description}</p>
    </li>
  )
}

export default FilmItem
