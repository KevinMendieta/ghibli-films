import React from 'react'
import FilmItem from './film-item'
import API from '../../api/'

class FilmList extends React.Component {
  state = {
    requestInProgress: false,
    films: []
  }

  loadFilms = async () => {
    try {
      this.setState({ requestInProgress: true })

      const films = await API.Films.list()

      this.setState( { films })
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ requestInProgress: false })
    }
  }

  componentDidMount() {
    this.loadFilms()
  }

  render() {
    const { films, requestInProgress } = this.state
    console.log(films)
    if(requestInProgress) return <div><p>Loading...</p></div>
    if(films.length === 0) return <div><p>No films found, sorry!</p></div>
    return (     
      <ul className='films'>
        {films.map(film => {
          const { id } = film
          return <FilmItem {...film} key={id}/>
        })}
      </ul>
    )
  }
}

export default FilmList
