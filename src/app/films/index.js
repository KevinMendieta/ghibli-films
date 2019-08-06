import React from 'react'
import SearchBox from '../shared/search-box'
import FilmList from '../films-list'
class Films extends React.Component {
  state = { filterTerm: '' }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-4'>
            <SearchBox term={this.filterTerm}/>
          </div>
        </div>
        <FilmList term={this.filterTerm}/>
      </div>
    )
  }
}

export default Films
