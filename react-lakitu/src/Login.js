import React from 'react'

import { Link } from 'react-router'

const Login = React.createClass({
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/doors">Doors</Link>
        <Link to="/doors">Events</Link>
        <Link to="/cardholders">Cardholders</Link>

        {this.props.children}
      </div>
    )
  }
})

export default Login