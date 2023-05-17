import React, { FC } from 'react'
import Grid from '@mui/material/Grid';
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

interface LayoutProps {
  children: React.ReactNode,
}



const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout