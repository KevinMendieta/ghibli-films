import React from 'react'
import FilmItem from './film-item'
const FILMS = [
  {name: 'Totoro', description: 'bla-bla-bla', id: '123'},
  {name: 'Adventures', description: 'bla-bla-bla', id: '1234'},
  {name: 'Fireflies', description: 'bla-bla-bla', id: '123'},
  {name: 'Haxhi', description: 'bla-bla-bla', id: '123'},
  {name: 'Magician', description: 'bla-bla-bla', id: '123'},
  {name: 'Mononoque', description: 'bla-bla-bla', id: '123'}
]
class FilmList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestInProgress: false
    }
  }

  render() {
    return (     
      <ul className='films'>
        {FILMS.map(film => {
          const {name, description, id} = film
          return <FilmItem name={name} description={description} key={id}/>
        })}
      </ul>
    )
  }
}

export default FilmList
