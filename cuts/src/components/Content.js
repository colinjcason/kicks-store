import React from 'react';
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';

const Content = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={4} sm={2}>
                <ProductCard
                imgSrc='https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                />
            </Grid>
            <Grid item xs={4} sm={2}>
                <ProductCard 
                imgSrc='https://images.unsplash.com/photo-1584386450584-c6d766612a45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'/>
            </Grid>
            <Grid item xs={4} sm={2}>
                <ProductCard />
            </Grid>
            <Grid item xs={4} sm={2}>
                <ProductCard />
            </Grid>
            <Grid item xs={4} sm={2}>
                <ProductCard />
            </Grid>
            <Grid item xs={4} sm={2}>
                <ProductCard />
            </Grid>
        </Grid>
    )
}

export default Content;