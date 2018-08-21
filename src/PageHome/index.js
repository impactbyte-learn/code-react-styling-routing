import React from 'react'

const handleSubmit = event => {
  event.preventDefault()
  console.log('EVENT SUBMIT')
}

const PageHome = () => (
  <div>
    <form onSubmit={handleSubmit}>
      <h3>Home Form</h3>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>
)

export default PageHome
