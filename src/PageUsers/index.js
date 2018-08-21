import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { request } from '../helpers'

class PageUsers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      error: null
    }

    this.getUsers = this.getUsers.bind(this)
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    request()
      .get('/users')
      .then(response => {
        this.setState({ users: response.data.users })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const users = this.state.users

    return (
      <div>
        <h3>Users</h3>
        <ul>
          {users.length ? (
            users.map(user => {
              return (
                <li key={user.id}>
                  <Link to={`/profile/${user.id}`}>{user.username}</Link>
                </li>
              )
            })
          ) : (
            <span>Loading users...</span>
          )}
        </ul>
      </div>
    )
  }
}

export default PageUsers
