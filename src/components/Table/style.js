import { styled, makeStyles } from '@material-ui/core/styles';
import { Typography, TableCell } from '@material-ui/core';

const StyledTableRow = makeStyles({
    hover: {
        "&$hover:hover": {
            backgroundColor: '#EFE7FF',
        }
    },
});

const StyledIcon = makeStyles({
    colorPrimary: {
        color: '#2a2a2a'
    }
})

const StyledTooltip = makeStyles({
    arrow: {
        color: '#2a2a2a',
    },
    tooltip: {
        backgroundColor: '#2a2a2a',
    }
});

const StyledTypography = styled(Typography)({
    color: 'black',
    fontWeight: 'bold'
})

const StyledTableCell = styled(TableCell)({
    paddingRight: 4,
    paddingLeft: 5
})

export { 
    StyledTableRow,
    StyledTypography,
    StyledIcon,
    StyledTooltip,
    StyledTableCell,
}