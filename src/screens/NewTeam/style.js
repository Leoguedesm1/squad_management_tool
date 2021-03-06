import { makeStyles } from '@material-ui/core/styles';

const StyledButton = makeStyles({
    outlinedPrimary: {
        color: 'white',
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderWidth: 0,
    }
});

const StyledTextField= makeStyles({
    root: {
        width: '100%',
    }
});

const Jogador = makeStyles({
    large: {
        width: '48px',
        height: '48px'
    },
});

export { 
    StyledTextField,
    StyledButton,
    Jogador
}