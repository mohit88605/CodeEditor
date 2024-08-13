import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'

const Container = styled(AppBar)`
   background:#060606;
   height:9vh;
`

const Header = () => {
  return (
    <>
        {/* AppBar is replaced by container */}
        <Container position='static'>             
            <Toolbar>CODE PEN</Toolbar>
        </Container>
    </>
  )
}

export default Header
