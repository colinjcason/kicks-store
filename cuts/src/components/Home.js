import React from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Content from './Content';
import Box from '@material-ui/core/Box';
import ContactCard from './ContactCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hero: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    marginTop: '60px',
    marginBottom: '30px'
  },
  header: {
    fontSize: '4rem',
    width: '150px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  subHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  demo: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1523646745854-e018a9bcc73c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '350px',
    margin: '60px',
    marginTop: '100px',
    color: '#fff',
    display: 'flex',
    alignItems: 'flex-end',
  },
  demoHeader: {
    margin: '25px',
    border: '1px solid #fff',
    padding: '25px',
    fontSize: '30px'
  },
  contact: {
    height: '500px',
  },
});

function Home() {
  const classes = useStyles();
  return (
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>

        <Box className={classes.hero} id='home'>
          <Box className={classes.header}>
            Welcome to Kicks
          </Box>
        </Box>

        <Grid item container className={classes.content} align='center'>
          <Grid item xs={4} />
            <Grid item xs={4} className={classes.subHeader}>
              Shop
            </Grid>
            <Grid item xs={4} />

          <Grid item xs={1} sm={0}/>
          <Grid item xs={10} sm={12}>
            <Content />
          </Grid>
          <Grid item xs={1} sm={0}/>
        </Grid>

        <Box className={classes.demo}>
            <Box className={classes.demoHeader}>
                The best deals anywhere.
            </Box>
        </Box>

        <Grid item container className={classes.content} align='center'>
          <Grid item xs={4} />
            <Grid item xs={4} className={classes.subHeader}>
              Contact
            </Grid>
          <Grid item xs={4} />

          <Grid item xs={1} sm={0} />
          <Grid item xs={10} sm={12}>
           <ContactCard />
          </Grid>
          <Grid item xs={1} sm={0}/>
        </Grid>

      </Grid>
  );
}

export default Home;
