import React, { Component } from 'react'
import { loadImage } from 'reactatouille'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <img className='logo' ref='logo' src={loadImage('punkbit-cropped.png')} alt='' />
      </div>
    )
  }
}

export default Header
