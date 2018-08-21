import React from 'react'
import axios from 'axios'

const NAME = process.env.REACT_APP_NAME
const API_URL = process.env.REACT_APP_API_URL

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
})

class PageUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default PageUsers
