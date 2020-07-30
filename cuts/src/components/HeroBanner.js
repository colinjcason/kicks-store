import React from 'react';
import Banner from '../assets/img/luis-quintero-3qqiMT2LdR8-unsplash.jpg';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    height: 0,
  },
});

export default function HeroBanner(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Card>
                <CardMedia image='../assets/img/luis-quintero-3qqiMT2LdR8-unsplash.jpg'/>
            </Card>
        </div>
    )
}