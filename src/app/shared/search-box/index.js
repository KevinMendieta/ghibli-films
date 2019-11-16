import React from 'react'

const SearchBox = ({value, onChange}) => {
  return(
    <div className='content'>
      <div className='search'>
        <div className='icon-container'>
          <span className='icon-search icon'/>
        </div>
        <input type='text' placeholder='Search films' value={value} onChange={event => onChange(event)}/>
      </div>
    </div>
  )
}

export default SearchBox
