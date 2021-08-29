import React from 'react';
import { Grid, Container, Typography, IconButton } from '@material-ui/core';
import { Card, Table, List, } from '../../components/index';
import { Add } from '@material-ui/icons';

import { StyledIcon, StyledIconButton, StyledTypography } from './style';

export default () => {

    const iconClasses = StyledIcon();
    const iconButtonClasses = StyledIconButton();

    return (
        <Container disableGutters>

            <Grid container direction='row' justifyContent="space-between" spacing={8}>

                <Grid item xs={6}>
                    <Card 
                        title="My teams"
                        action={
                            <IconButton size='medium' color="primary" classes={iconButtonClasses}>
                                <Add color="primary" classes={iconClasses} />
                            </IconButton>
                        }
                    >
                        
                        <Table 
                            items={[
                                { 
                                    name: 'Barcelona',
                                    description: 'Barcelona Squad',
                                }, {
                                    name: 'Real Madrid',
                                    description: 'Real Madrid Squad',
                                }, {
                                    name: 'Milan',
                                    description: 'Milan Squad',
                                }, {
                                    name: 'Liverpool',
                                    description: 'Liverpool Squad',
                                }, {
                                    name: 'Bayern Munich',
                                    description: 'Bayer Munich Squad',
                                }, {
                                    name: 'Lazio',
                                    description: 'Lazio Squad',
                                }
                            ]}
                        />

                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item xs>
                            <Card title="Top 5">
                                <Grid container direction="row" spacing={2}>

                                    <Grid item xs={6}>
                                        <Grid container direction="column" alignItems="flex-start" spacing={1}>
                                            <Grid item>
                                                <StyledTypography>Highest avg age</StyledTypography>
                                            </Grid>
                                            <Grid item>
                                                <List 
                                                    items={[
                                                        {
                                                            name: 'Inter Milan',
                                                            value: 31.9
                                                        }, {
                                                            name: 'APOEL Nicosia',
                                                            value: 31.7
                                                        }, {
                                                            name: 'AC Milan',
                                                            value: 31.6
                                                        }, {
                                                            name: 'Besikitas JK',
                                                            value: 31.4
                                                        }, {
                                                            name: 'Olympiacos Piraeus',
                                                            value: 31.3
                                                        }
                                                    ]} />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Grid container direction="column" alignItems="flex-start" spacing={1}>
                                            <Grid item>
                                                <StyledTypography>Lowest avg age</StyledTypography>
                                            </Grid>
                                            <Grid item>
                                                <List 
                                                    items={[
                                                        {
                                                            name: 'Zalgiris Vilnius',
                                                            value: 21.1
                                                        }, {
                                                            name: 'Arsenal FC',
                                                            value: 21.6
                                                        }, {
                                                            name: 'Ajax Amsterdam',
                                                            value: 22.0
                                                        }, {
                                                            name: 'FC Nantes',
                                                            value: 22.1
                                                        }, {
                                                            name: 'CSKA Moscou',
                                                            value: 22.5
                                                        }
                                                        ]} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    )
}