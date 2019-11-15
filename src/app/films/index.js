import React from 'react'
import SearchBox from '../shared/search-box'
import FilmList from '../films-list'
class Films extends React.Component {
  state = { filterTerm: '' }

  handleChange = (event) => {
    const value = event.currentTarget.value

    this.setState({ filterTerm: value })
  }

  render() {
    const { filterTerm } = this.state

    return (
      <div>
        <div className='row'>
          <div className='col-4'>
            <SearchBox value={this.filterTerm} onChange={this.handleChange}/>
          </div>
        </div>
        <FilmList filterTerm={filterTerm}/>
      </div>
    )
  }
}

export default Films
