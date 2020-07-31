import React from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Content from './Content';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hero: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1570037276380-c3c19487a76d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '',
    fontSize: '4rem'
  }
});

function App() {
  const classes = useStyles();
  return (
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>

        {/* <Grid item container>
          <Grid item xs={6} className={classes.header}>
            <Box>Welcome to Kicks</Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.hero} />
          </Grid>
        </Grid> */}

        <Box className={classes.hero}>
          <Box className={classes.header}>Welcome to Kicks</Box>
        </Box>

        <Grid item container>
          <Grid item xs={1} sm={0}/>
          <Grid item xs={10} sm={12} >
            <Content />
          </Grid>
          <Grid item xs={1} sm={0}/>
        </Grid>        
      </Grid>      
  );
}

export default App;
