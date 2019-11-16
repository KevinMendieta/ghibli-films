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
    const { filterTerm } = this.props
    const { films, requestInProgress } = this.state
    
    const filteredFilms = films.filter(film => {
      const { title, director, description, release_date} = film
      const searchText = `${title.toUpperCase()} ${director.toUpperCase()} ${description.toUpperCase()} ${release_date.toUpperCase()}`

      return searchText.indexOf(filterTerm.toUpperCase()) >= 0
    })

    if(requestInProgress) return <div className="row"><div className='lds-dual-ring'></div></div>
    if(filteredFilms.length === 0) return <div><p className="row">No films found, sorry!</p></div>
    return (     
      <ul className='films'>
        {filteredFilms
        .map(film => {
          const { id } = film
          return <FilmItem {...film} key={id}/>
        })}
      </ul>
    )
  }
}

export default FilmList
