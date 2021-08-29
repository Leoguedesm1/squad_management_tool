import React from 'react';
import { List, ListItem, ListItemText, Grid, Typography } from '@material-ui/core';
import { StyledList, StyledListItem, StyledTypography } from './style';

export default ({ items }) => {

    return (
        <StyledList>
            <Grid container xs={12} spacing={1} alignItems="center" justifyContent="center" alignContent="center">
                { items.map((item, index) => (
                    <Grid item xs={12}>
                        <StyledListItem>
                            <Grid container direction="row" justifyContent="space-between" spacing={10}>
                                <Grid item>
                                    <Typography variant="body2">{item.name}</Typography>
                                </Grid>
                                <Grid item>
                                    <StyledTypography variant="body2">{item.value}</StyledTypography>
                                </Grid>
                            </Grid>
                        </StyledListItem>
                    </Grid>
                ))}
            </Grid>
        </StyledList>
    )
};