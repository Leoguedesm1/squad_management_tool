import React from 'react';
import { 
    Grid, 
    Container, 
    Typography, 
    TextField, 
    FormControl, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel, 
    Radio,
    Button,
    Select,
    MenuItem,
    Avatar,
} from '@material-ui/core';
import { Card, VerticalSoccerField } from '../../components/index';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import { StyledTextField, StyledButton, Jogador } from './style';

import { TeamContext } from '../../context/Team';
import { TeamsContext } from '../../context/Teams';
import { useHistory } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';

export default () => {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [website, setWebsite] = React.useState("");
    const [type, setType] = React.useState("fantasy");
    const [tags, setTags] = React.useState([]);
    const [errors, setErrors] = React.useState({
        name: false,
        description: false,
        website: false,
    })

    const textFieldClasses = StyledTextField();
    const buttonClasses = StyledButton();
    const jogadorClasses = Jogador();

    const history = useHistory();

    const { team, setTeam } = React.useContext(TeamContext);
    const { teams, setTeams } = React.useContext(TeamsContext);

    const formations = [
        {
            value: 1,
            label: "4-5-1",
            goal: 1,
            zag: 4,
            mei: {
                firstLine: 2,
                secondLine: 3
            },
            ata: {
                firstLine: 0,
                secondLine: 1
            }
        }, {
            value: 2,
            label: "3-4-3",
            goal: 1,
            zag: 3,
            mei: {
                firstLine: 2,
                secondLine: 2,
            },
            ata: {
                firstLine: 2,
                secondLine: 1,
            }
        }, {
            value: 3,
            label: "4-4-2",
            goal: 1,
            zag: 4,
            mei: {
                firstLine: 3,
                secondLine: 1,
            },
            ata: {
                firstLine: 2,
                secondLine: 0,
            }
        }, {
            value: 4,
            label: "4-3-3",
            goal: 1,
            zag: 4,
            mei: {
                firstLine: 3,
                secondLine: 0,
            },
            ata: {
                firstLine: 2,
                secondLine: 1
            }
        }, {
            value: 5,
            label: "3-5-2",
            goal: 1,
            zag: 3,
            mei: {
                firstLine: 3,
                secondLine: 2,
            },
            ata: {
                firstLine: 0,
                secondLine: 2
            }
        }
    ]

    const [formationValue, setFormationValue] = React.useState(1);
    const [formation, setFormation] = React.useState(formations[0]);

    function handleSave() {

        let errorsAux = JSON.parse(JSON.stringify(errors))
        let error = name == "" || description == "" || website == "";
        if (error) {
            if (name == "") {
                errorsAux.name = true;
                setErrors(errorsAux);
            }

            if (description == "") {
                errorsAux.description = true;
                setErrors(errorsAux);
            }

            if (website == "") {
                errorsAux.website = true;
                setErrors(errorsAux);
            }

            return;
        }

        let teamAux = {
            name,
            description,
            website,
            type,
            tags,
            formationValue,
            formation
        };

        let teamsAux = [ ...teams, teamAux];

        setTeams(teamsAux);
        history.push('/');
    }

    let goalUI = Array.from(Array(formation.goal), (e, i) => {
        return (
            <Grid item>
                <Avatar className={jogadorClasses.large}>
                    <AddIcon />
                </Avatar>
            </Grid>
        )
    })
    
    let zagUI = Array.from(Array(formation.zag), (e, i) => {
        return (
            <Grid item>
                <Avatar className={jogadorClasses.large}>
                    <AddIcon />
                </Avatar>
            </Grid>
        )
    })

    let meiUI = <Grid container direction="column" spacing={2} justifyContent="center" alignContent="center" alignItems="center">
        <Grid item>
            <Grid container direction="row" spacing={10}>
                {Array.from(Array(formation.mei.secondLine), (e, i) => {
                    return (
                        <Grid item>
                            <Avatar className={jogadorClasses.large}>
                                <AddIcon />
                            </Avatar>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>

        <Grid item>
            <Grid container direction="row" spacing={10}>
                {Array.from(Array(formation.mei.firstLine), (e, i) => {
                    return (
                        <Grid item>
                            <Avatar className={jogadorClasses.large}>
                            <   AddIcon />
                            </Avatar>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    </Grid>

    let ataUI = <Grid container direction="column" spacing={2} justifyContent="center" alignContent="center" alignItems="center">
        <Grid item>
            <Grid container direction="row" spacing={10}>
                {Array.from(Array(formation.ata.secondLine), (e, i) => {
                    return (
                        <Grid item>
                            <Avatar className={jogadorClasses.large}>
                                <AddIcon />
                            </Avatar>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>

        <Grid item>
            <Grid container direction="row" spacing={10}>
                {Array.from(Array(formation.ata.firstLine), (e, i) => {
                    return (
                        <Grid item>
                            <Avatar className={jogadorClasses.large}>
                                <AddIcon />
                            </Avatar>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    </Grid>


    return (
        <Container disableGutters={true} fixed={true}>

                <Card title="Create your team">
                    <Grid container direction='column' spacing={2} xs={12} xl={12} justifyContent="center" >

                        <Grid item>
                            <Typography>TEAM INFORMATION</Typography>
                        </Grid>

                        <Grid item>

                            <Grid container direction="row" justifyContent="space-between" spacing={10}>

                                <Grid item xs={6}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField 
                                                label="Team name" 
                                                variant="outlined" 
                                                classes={textFieldClasses}
                                                onChange={event => {
                                                    let errorsAux = JSON.parse(JSON.stringify(errors))
                                                    errorsAux.name = false;
                                                    setErrors(errorsAux);
                                                    setName(event.target.value)
                                                }}
                                                value={name}
                                                error={errors.name}
                                                helperText={errors.name ? "Campo obrigatório." : ""}
                                             />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                label="Description"
                                                variant="outlined"
                                                multiline
                                                rows={5}
                                                classes={textFieldClasses}
                                                onChange={event => {
                                                    let errorsAux = JSON.parse(JSON.stringify(errors))
                                                    errorsAux.description = false;
                                                    setErrors(errorsAux);
                                                    setDescription(event.target.value)
                                                }}
                                                value={description}
                                                error={errors.description}
                                                helperText={errors.description ? "Campo obrigatório." : ""}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField 
                                                label="Team website" 
                                                variant="outlined" 
                                                classes={textFieldClasses} 
                                                onChange={event => {
                                                    let errorsAux = JSON.parse(JSON.stringify(errors))
                                                    errorsAux.website = false;
                                                    setErrors(errorsAux);
                                                    setWebsite(event.target.value)
                                                }}
                                                value={website}
                                                error={errors.website}
                                                helperText={errors.website ? "Campo obrigatório ou inválido." : ""}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Team type</FormLabel>
                                                <RadioGroup 
                                                    value={type}
                                                    onChange={event => setType(event.target.value)}
                                                >
                                                    <Grid container direction="row">
                                                        <Grid item>
                                                            <FormControlLabel value="real" control={<Radio />} label="Real" />
                                                        </Grid>
                                                        <Grid item>
                                                            <FormControlLabel value="fantasy" control={<Radio />} label="Fantasy" />
                                                        </Grid>
                                                    </Grid>
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item>
                                                    <Typography>Tags</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <ReactTagInput 
                                                        tags={tags} 
                                                        editable={true}
                                                        readOnly={false}
                                                        removeOnBackspace={true}
                                                        onChange={(newTags) => setTags(newTags)}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid item>
                            <Typography>SQUAD FORMATION</Typography>
                        </Grid>

                        <Grid item>
                            <Grid container direction="row" justifyContent="space-between">
                                <Grid item xs={12}>
                                    <Grid container direction="column" spacing={4}>
                                        <Grid item>
                                            <FormControl>
                                                <Select
                                                    value={formationValue}
                                                    onChange={event => {
                                                        setFormationValue(event.target.value)
                                                        setFormation(formations[event.target.value-1])
                                                    }}
                                                >
                                                    {formations.map((f, index) => {
                                                        return(
                                                            <MenuItem value={f.value}>{f.label}</MenuItem>
                                                        )
                                                        
                                                    })}
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item>
                                            <VerticalSoccerField>
                                                <Grid container spacing={6} style={{ alignSelf: 'center' }} direction="column" alignItems="center" justifyContent="center" alignContent="center">
                                                    {/*ATACANTES*/}
                                                    <Grid item>
                                                        {ataUI}
                                                    </Grid>

                                                    {/*MEIO*/}
                                                    <Grid item>
                                                        {meiUI}
                                                    </Grid>

                                                    {/*ZAGUEIRO*/}
                                                    <Grid item>
                                                        <Grid container spacing={5}>
                                                            {zagUI}
                                                        </Grid>
                                                    </Grid>

                                                    {/*GOL*/}
                                                    <Grid item>
                                                        <Grid container>
                                                            {goalUI}
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </VerticalSoccerField>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>

                                </Grid>
                                
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Button 
                                color="primary" 
                                fullWidth 
                                variant="outlined"
                                onClick={handleSave}
                                classes={buttonClasses}
                            >
                                SALVAR
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            

        </Container>
    )
}