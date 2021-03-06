import React from 'react';
import { Grid, Container, Divider, IconButton, Avatar } from '@material-ui/core';
import { Card, Table, List, SoccerField } from '../../components/index';
import { Add } from '@material-ui/icons';

import { StyledIcon, StyledIconButton, StyledTypography, PickedAvatar, NonPickedAvatar, StyledTypographyWhite, StyledDivider } from './style';

import { useHistory } from 'react-router-dom';
import { TeamsContext } from '../../context/Teams';

export default () => {

    const iconClasses = StyledIcon();
    const iconButtonClasses = StyledIconButton();
    const avatarPickedClasses = PickedAvatar();
    const avatarNonPickedClasses = NonPickedAvatar();
    const dividerClasses = StyledDivider();

    const history = useHistory();

    const { teams, setTeams } = React.useContext(TeamsContext);

    function onDelete(team) {
        teams.map((t, index) => {
            if (t === team) {
                let teamsAux = [ ...teams];
                teamsAux.splice(index, 1);
                setTeams(teamsAux);
            }
        })
    }

    function onOrder(attribute) {

        function compare(a, b) {
            if (a[attribute] < b[attribute]) {
                return -1;
            }

            if (a[attribute] > b[attribute]) {
                return 1;
            }

            return 0;
        }

        let teamsAux = [...teams];
        teamsAux.sort(compare);
        setTeams(teamsAux);
    }

    return (
        <Container disableGutters={true} fixed={true}>

            <Grid container direction='row' justifyContent="space-between" spacing={2}>

                <Grid item xs={12} xl={6}>
                    <Card 
                        title="My teams"
                        action={
                            <IconButton 
                                size='medium' 
                                color="primary" 
                                classes={iconButtonClasses}
                                onClick={() => history.push('/new_team')}
                            >
                                <Add color="primary" classes={iconClasses} />
                            </IconButton>
                        }
                    >
                        
                        <Table 
                            items={teams} 
                            onDelete={onDelete}
                            onOrder={onOrder}
                        />

                    </Card>
                </Grid>

                <Grid item xs={12} xl={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12} xl={12}>
                            <Card title="Top 5">
                                <Grid container direction="row" spacing={2}>

                                    <Grid item xs={6} xl={6}>
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

                                    <Grid item xs={6} xl={6}>
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

                        <Grid item xs={12} xl={6}>
                            <SoccerField>
                                <Grid container direction="row" alignContent="center">
                                    <Grid item xs={6} xl={6}>
                                        <Grid container direction="column" spacing={2} alignItems="center" justifyContent="center" alignContent="center">
                                            <Grid item xs={12}>
                                                <StyledTypographyWhite>Most picked player</StyledTypographyWhite>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container direction="row" spacing={1}>
                                                    <Grid item>
                                                        <Avatar className={avatarPickedClasses.large} classes={avatarPickedClasses} />
                                                    </Grid>
                                                    <Grid item>
                                                        <StyledTypographyWhite>75%</StyledTypographyWhite>
                                                        <Divider classes={dividerClasses} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6} xl={6}>
                                        <Grid container direction="column" spacing={2} alignItems="center" justifyContent="center" alignContent="center">
                                            <Grid item xs={12}>
                                                <StyledTypographyWhite>Less picked player</StyledTypographyWhite>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container direction="row" spacing={1}>
                                                    <Grid item>
                                                        <Avatar className={avatarNonPickedClasses.large}/>
                                                    </Grid>
                                                    <Grid item>
                                                        <StyledTypographyWhite>25%</StyledTypographyWhite>
                                                        <Divider classes={dividerClasses} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </SoccerField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    )
}