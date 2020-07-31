import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';



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
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Box className={classes.title}>
            Kicks
          </Box>
          <ShoppingCartIcon color="inherit" />
        </Toolbar>
      </AppBar>
  );
}

