import React from 'react'

import { request } from '../helpers'

class PageProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      error: null
    }

    request()
      .get(`/users/${props.match.params.id}`)
      .then(response => {
        this.setState({ user: response.data.user })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    return (
      <div>
        {this.state.user && this.state.user.username ? (
          <span>
            Profile of {this.state.user.username} ({this.state.user.email})
          </span>
        ) : (
          <span>Loading user...</span>
        )}
      </div>
    )
  }
}

export default PageProfile
