import React from 'react';
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';

const Content = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={4} sm={4} md={2}>
                <ProductCard
                imgSrc='https://images.unsplash.com/photo-1565379793984-e65b51b33b37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
                <ProductCard 
                imgSrc='https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
                <ProductCard 
                imgSrc='https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
                <ProductCard 
                imgSrc='https://images.unsplash.com/photo-1537189561004-36ad88b87469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
                <ProductCard 
                imgSrc='https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
                <ProductCard 
                 imgSrc='https://images.unsplash.com/photo-1593287073863-c992914cb3e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'/>
            </Grid>
        </Grid>
    )
}

export default Content;