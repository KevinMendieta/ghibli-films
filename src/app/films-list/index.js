import React from 'react'
import FilmItem from './film-item'
const FILMS = [
  {name: 'Totoro', description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.', id: '123'},
  {name: 'Adventures', description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.', id: '1234'},
  {name: 'Fireflies', description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.', id: '1235'},
  {name: 'Haxhi', description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.', id: '1236'},
  {name: 'Magician', description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.', id: '1237'},
  {name: 'Mononoque', description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.', id: '1238'}
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
