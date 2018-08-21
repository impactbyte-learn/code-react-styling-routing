import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
  background: #555;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`

const MenuList = styled.li`
  padding: 5px 0;
  margin-right: 20px;
  margin-bottom: 5px;
  display: inline;
`

const MenuLink = styled(Link)`
  color: #fff;
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
