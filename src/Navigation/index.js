import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
    <li>
      <Link to="/random">Not Found</Link>
    </li>
  </ul>
)

export default Navigation
