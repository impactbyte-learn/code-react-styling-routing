import React from 'react'

const PageProfile = props => {
  const username = props.match.params.username
  return (
    <div>
      {username ? (
        <span>Profile of {username}</span>
      ) : (
        <span>Unknown username</span>
      )}
    </div>
  )
}

export default PageProfile
