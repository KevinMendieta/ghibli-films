import React from 'react'
import logo from '../../../img/ghibli-logo.svg'

const Header = props => {
  return(
    <div className='row full-width header'>
      <img src={logo} className="logo" alt="ghibli logo" />
    </div>
  )
}

export default Header
