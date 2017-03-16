import React, { Component } from 'react'
import { isBrowser } from 'reactatouille'
import Header from './header'
import Footer from './footer'

// include the stylesheet entry-point
isBrowser() && require('../../sass/app.scss')

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <main>
          { this.props.children }
        </main>
        <Footer />
      </div>
    )
  }

}

export default App
