import React, { FC } from 'react'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import UserItems from './UserItems'
import Menu from './Menu'
import BottomMenu from './BottomMenu'

const Sidebar: FC = () => {
  return (
    <div>
      <UserItems />
      <Menu />
      <BottomMenu />
    </div>
  )
}

export default Sidebar