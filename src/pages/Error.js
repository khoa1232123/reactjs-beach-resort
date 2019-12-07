import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default class Error extends Component {
  render() {
    return (
      <>
        <Hero>
          <Banner title="Error 404" subtitle="Page not found">
            Do you want go to homepage?<br /><br />
            <Link to="/" className="btn-primary">Go to home</Link>
          </Banner>
        </Hero>
      </>
    )
  }
}
