import React from 'react'
import ReactFilestack from 'filestack-react'

import { request } from '../helpers'

class PageUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      apiKey: process.env.REACT_APP_API_KEY,
      file: {},
      error: null
    }
  }

  render() {
    return (
      <div>
        <h3>File Upload</h3>
      </div>
    )
  }
}

export default PageUpload
