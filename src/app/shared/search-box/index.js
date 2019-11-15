import React from 'react'

const SearchBox = ({value, onChange}) => {
  return(
    <div className='content'>
      <div className='search'>
        <input type='text' placeholder='Search films' value={value} onChange={event => onChange(event)}/>
      </div>
    </div>
  )
}

export default SearchBox
