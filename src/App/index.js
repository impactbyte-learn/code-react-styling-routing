import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from '../Navigation'
import PageHome from '../PageHome'
import PageAbout from '../PageAbout'
import PageProfile from '../PageProfile'
import PageUsers from '../PageUsers'
import PageNotFound from '../PageNotFound'

const Page = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`

const Header = styled.div`
  color: ${({ color }) => color && color};
  background-color: ${({ bc }) => bc && bc};
`

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Header color="white" bc="black">
            Code React Styling & Routing
          </Header>

          <Navigation />

          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="/about" component={PageAbout} />
            <Route path="/profile/:username" component={PageProfile} />
            <Route path="/profile" component={PageProfile} />
            <Route path="/users" component={PageUsers} />
            <Route component={PageNotFound} />
          </Switch>
        </Page>
      </Router>
    )
  }
}

export default App
