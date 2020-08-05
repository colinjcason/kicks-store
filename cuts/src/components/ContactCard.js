import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
    root: {
      width: '250px',
      height: '200px',
      margin: '5px',
      color: 'black',
      padding: '25px',
      paddingTop: '50px',
    },
  });

export default function ContactCard() {
    const classes = useStyles();
    return (
      <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Card raised={true} className={classes.root}>
            <Grid item container direction='column' spacing={5} >
                    <Grid item>
                      <Link href='https://www.linkedin.com/in/colin-cason/' target='_blank' color="inherit">
                        <LinkedInIcon fontSize='large'/>
                      </Link>
                    </Grid>
                    <Grid item>
                        Linkedin
                    </Grid>
                </Grid>
            </Card>
          </Grid>   
          <Grid item xs={12} sm={12} md={4}>
            <Card raised={true} className={classes.root}>
            <Grid item container direction='column' spacing={5} >
                    <Grid item>
                      <Link href='https://github.com/colinjcason' target='_blank' color="inherit">
                        <GitHubIcon fontSize='large'/>
                      </Link>
                    </Grid>
                    <Grid item>
                        Github
                    </Grid>
                </Grid>
            </Card>
          </Grid>   
          <Grid item xs={12} sm={12} md={4}>
            <Card raised={true} className={classes.root}>
                <Grid item container direction='column' spacing={5} >
                    <Grid item>
                      <MailOutlineIcon fontSize='large'/>
                    </Grid>
                    <Grid item>
                        colinjcason@gmail.com
                    </Grid>
                </Grid>
            </Card>
          </Grid>
      </Grid>
    );
};