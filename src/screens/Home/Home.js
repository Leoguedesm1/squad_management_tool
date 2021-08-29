import React from 'react';
import { Grid, Container, Typography, IconButton } from '@material-ui/core';
import { Card, Table, } from '../../components/index';
import { Add } from '@material-ui/icons';

import { StyledIcon, StyledIconButton } from './style';

export default () => {

    const iconClasses = StyledIcon();
    const iconButtonClasses = StyledIconButton();

    return (
        <Container disableGutters>

            <Grid container direction='row'>

                <Grid item>
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
            </Grid>

        </Container>
    )
}