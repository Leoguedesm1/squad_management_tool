import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import logo from '../../assets/images/logo.png';
import { Container, StyledAvatar } from './style';

export default () => {
    return (
        <Container container alignItems='center' justifyContent='space-between' direction='row'>
            <Grid item>
                <Grid container direction='row' alignItems='center' spacing={2}>
                    <Grid item>
                        <Avatar src={logo} alt={"Venturus"} />
                    </Grid>
                    <Grid item>
                        <Typography variant='h5'>Squad Management Tool</Typography>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item>
                <Grid container direction='row' alignItems='center' spacing={2}>
                    <Grid item>
                        <Typography>John Doe</Typography>
                    </Grid>
                    <Grid item>
                        <StyledAvatar>JD</StyledAvatar>
                    </Grid>
                </Grid>
            </Grid>
            
        </Container>
    )
}