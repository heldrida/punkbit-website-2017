import React, { Component } from 'react'
import { loadImage } from 'reactatouille'
import Navbar from './navbar'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <img className='logo' ref='logo' src={loadImage('punkbit-cropped.png')} alt='' />
        <Navbar />
      </div>
    )
  }
}

export default Header
