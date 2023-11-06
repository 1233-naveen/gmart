
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import PersistentDrawerLeft from './sidebar';

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow:1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ }}>
            News
          </Typography>
          
          <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to='store'>Store</Link></Button>
          
          
        </Toolbar>
        
      </AppBar>
    </Box>
    <PersistentDrawerLeft/>
    </>
  )
}

export default NavBar