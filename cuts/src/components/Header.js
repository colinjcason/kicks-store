import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    color: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '20px',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar className={classes.root}>
        <Toolbar>
          <Box className={classes.title}>
              <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                Shop
              </Link>
          </Box>
          <IconButton>
              <Link to='/cart'>
                  <Badge badgeContent={0} showZero color='primary'>
                    <ShoppingCartIcon style={{color: 'black'}} />
                  </Badge>
              </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

