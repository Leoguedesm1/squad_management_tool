import { styled } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core/';

const Container = styled(Grid)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  padding: '10px 30px',
  color: 'white',
});

const StyledAvatar = styled(Avatar)({
    background: 'white',
    color: 'black'
})

export { 
    Container,
    StyledAvatar,
}