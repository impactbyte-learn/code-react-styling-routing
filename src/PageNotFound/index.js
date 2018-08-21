import React from 'react'

const PageNotFound = props => {
  const path = props.location.pathname

  return (
    <div>
      Sorry, page <code>{path}</code> is not found
    </div>
  )
}

export default PageNotFound
