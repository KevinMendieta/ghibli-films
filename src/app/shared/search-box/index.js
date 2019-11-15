import React from 'react'

const SearchBox = ({term}) => {
  return(
    <div className='content'>
      <div className='search'>
        <input type='text' placeholder='Search films'></input>
      </div>
    </div>
  )
}

export default SearchBox
