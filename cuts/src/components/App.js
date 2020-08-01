import React from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Content from './Content';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hero: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    fontSize: '4rem',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  subHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  demo: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '350px',
    margin: '60px'
  },
  contact: {
    height: '500px',
  },
});

function App() {
  const classes = useStyles();
  return (
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>

        <Box className={classes.hero}>
          <Box className={classes.header}>
            Welcome to Kicks
          </Box>
        </Box>

        <Grid item container className={classes.content} align='center'>
        <Grid item xs={4} />
          <Grid item xs={4} className={classes.subHeader}>
            Shop
          </Grid>
          <Grid xs={4} />

          <Grid item xs={1} sm={0}/>
          <Grid item xs={10} sm={12} className={classes.products}>
            <Content />
          </Grid>
          <Grid item xs={1} sm={0}/>
        </Grid>

        {/* <Grid item container justify='center' align='center'>
          <Grid item xs={4} style={{backgroundColor: 'grey'}}/>
          <Grid item xs={4} className={classes.subHeader}>
            Shop Now
          </Grid>
          <Grid xs={4} style={{backgroundColor: 'grey'}}/>
        </Grid> */}

        <Box className={classes.demo}></Box>

        <Box className={classes.contact}></Box>

      </Grid>
  );
}

export default App;
