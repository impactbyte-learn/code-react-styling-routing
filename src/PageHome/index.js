import React from 'react'

class PageHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.history.push(`/profile/${this.state.username}`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Home Form</h3>
          <input name="username" type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PageHome
