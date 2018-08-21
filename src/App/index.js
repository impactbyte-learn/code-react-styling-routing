import React, { Component } from 'react'
import styled from 'styled-components'

const AppStyled = styled.div`
  color: ${({ color }) => color && color};
  background-color: ${({ bc }) => bc && bc};
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
      <AppStyled color="white" bc="black">
        Code React Styling & Routing
      </AppStyled>
    )
  }
}

export default App
