import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { Container } from './style';

export default () => {
    return (
        <Container container alignItems='center' justifyContent='center' direction='row'>
            <Grid item>
                <Typography>2021 - All rights reserved</Typography>
            </Grid>
        </Container>
    )
}