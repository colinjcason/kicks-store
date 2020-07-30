import React from 'react';
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';


const Content = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <ProductCard />
            </Grid>
            <Grid item xs={3}>
                <ProductCard />
            </Grid>
            <Grid item xs={3}>
                <ProductCard />
            </Grid>
        </Grid>
    )
}

export default Content;