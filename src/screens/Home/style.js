import { styled, makeStyles } from '@material-ui/core/styles';

const StyledTableRow = makeStyles({
    hover: {
        "&$hover:hover": {
            backgroundColor: '#EFE7FF',
        }
    },
});

const StyledIcon = makeStyles({
    colorPrimary: {
        color: '#fff'
    }
})

const StyledIconButton = makeStyles({
    colorPrimary: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    root: {
        borderRadius: 5,
        padding: '5px 5px',
        boxShadow: '0px 10px 10px -2px purple'

    }
})

export { 
    StyledTableRow,
    StyledIcon,
    StyledIconButton,
}