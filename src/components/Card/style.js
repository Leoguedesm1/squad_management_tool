import { styled, makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core/';

const StyledCard = styled(Card)({
    borderRadius: 10,
});

const StyledCardHeader = makeStyles({
    title: {
        color: 'purple',
        fontWeight: 'bold'
    },
    content: {
        padding: '0px 10px',
        alignItems: 'center'
    },

})

export { 
    StyledCardHeader,
    StyledCard,
}