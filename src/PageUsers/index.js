import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL

const request = axios.create({
  baseURL: API_URL,
  timeout: 5000
})

class PageUsers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      error: null
    }

    request
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
          {users &&
            users.map(user => {
              return (
                <li key={user.id}>
                  <Link to={`/profile/${user.id}`}>{user.username}</Link>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

export default PageUsers
