import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const MenuList = styled.li`
  margin-right: 20px;
  display: inline;
`

const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
`

const Navigation = () => (
  <Menu>
    <MenuList>
      <MenuLink to="/">Home</MenuLink>
    </MenuList>
    <MenuList>
      <MenuLink to="/about">About</MenuLink>
    </MenuList>
    <MenuList>
      <MenuLink to="/users">Users</MenuLink>
    </MenuList>
    <MenuList>
      <MenuLink to="/upload">Upload</MenuLink>
    </MenuList>
    <MenuList>
      <MenuLink to="/random">NotFound</MenuLink>
    </MenuList>
  </Menu>
)

export default Navigation
