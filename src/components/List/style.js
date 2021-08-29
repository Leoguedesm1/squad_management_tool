import { styled, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';

const StyledList = styled(List)({
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    width: '100%',
    minWidth: '100%',
    paddingLeft: '5px'
});

const StyledListItem = styled(ListItem)({
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    minWidth: '10%',
});

const StyledTypography = styled(Typography)({
    color: 'black',
    fontWeight: 'bold'
})

export { 
    StyledList,
    StyledListItem,
    StyledTypography
}