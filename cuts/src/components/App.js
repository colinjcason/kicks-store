import React from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import Grid from '@material-ui/core/Grid';
import Content from './Content';

function App() {
  return (
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid xs={0} sm={2}/>
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid xs={0} sm={2}/>
        </Grid>        
      </Grid>      
  );
}

export default App;
