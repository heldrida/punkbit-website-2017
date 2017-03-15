import React, { Component } from 'react'
import { isBrowser } from 'reactatouille'
import Header from './header'

// include the stylesheet entry-point
isBrowser() && require('../../sass/app.scss')

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        { this.props.children }
      </div>
    )
  }

}

export default App
