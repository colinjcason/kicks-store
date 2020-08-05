import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';
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
  popover: {
    padding: theme.spacing(2)
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'Feature coming soon!' : undefined;

  return (
      <AppBar className={classes.root}>
        <Toolbar>
          <Box className={classes.title}>
              <Link to='/' href='home' style={{textDecoration: 'none', color: 'black'}}>
                Shop
              </Link>
          </Box>
          <IconButton>
              <Link>
                  <Badge badgeContent={0} showZero color='primary' onClick={handleClick}>
                    <ShoppingCartIcon style={{color: 'black'}} />
                  </Badge>
              </Link>
              <Popover 
                id={id} 
                open={open} 
                anchorEl={anchorEl} 
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
              >
                 <Box className={classes.popover}>Feature Coming Soon!</Box>  
              </Popover>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

