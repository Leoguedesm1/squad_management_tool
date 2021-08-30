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
} from '@material-ui/core';
import { Card } from '../../components/index';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import { StyledTextField, StyledButton } from './style';

import { TeamContext } from '../../context/Team';
import { TeamsContext } from '../../context/Teams';
import { useHistory } from 'react-router-dom';

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

    const history = useHistory();

    const { team, setTeam } = React.useContext(TeamContext);
    const { teams, setTeams } = React.useContext(TeamsContext);

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
            tags
        };

        let teamsAux = [ ...teams, teamAux];

        setTeams(teamsAux);
        history.push('/');
    }

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