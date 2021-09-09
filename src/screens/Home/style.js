import { styled, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core'

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
});

const PickedAvatar = makeStyles({
    large: {
        width: '128px',
        height: '128px'
    },
    root: {
        boxShadow: '0px 0px 10px 6px purple',
        border: '2px dashed white',
    }
});

const NonPickedAvatar = makeStyles({
    large: {
        width: '128px',
        height: '128px'
    },
});

const StyledTypography = styled(Typography)({
    color: 'black',
    fontWeight: 'bold'
});

const StyledTypographyWhite = styled(Typography)({
    color: 'white',
    fontWeight: 'bold'
});

const StyledDivider = makeStyles({
    root: {
        background: 'white',
        height: '2px',
    }
})

export { 
    StyledTableRow,
    StyledIcon,
    StyledIconButton,
    StyledTypography,
    PickedAvatar,
    NonPickedAvatar,
    StyledTypographyWhite,
    StyledDivider,
}