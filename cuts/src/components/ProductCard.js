import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 175,
    margin: '5px'
  },
  media: {
    height: 130,
  }
});

export default function ProductCard({ imgSrc }) {
  const classes = useStyles();
  return (
    <Card variant='outlined' className={classes.root}>
        <CardMedia 
          className={classes.media}
          image={imgSrc}
        />
    </Card>
  );
}
