import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const MenuList = styled.li`
  margin-right: 10px;
  display: inline;
`

const Navigation = () => (
  <Menu>
    <MenuList>
      <Link to="/">Home</Link>
    </MenuList>
    <MenuList>
      <Link to="/about">About</Link>
    </MenuList>
    <MenuList>
      <Link to="/users">Users</Link>
    </MenuList>
    <MenuList>
      <Link to="/upload">Upload</Link>
    </MenuList>
    <MenuList>
      <Link to="/random">NotFound</Link>
    </MenuList>
  </Menu>
)

export default Navigation
