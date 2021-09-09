import { styled } from '@material-ui/core/styles';

const Pitch = styled('div')({
    borderRadius: 10,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width: '400px',
    height: '500px',
    position: 'relative',
})

const CenterCircle = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90px',
    height: '90px',
    border: '1px solid white',
    borderRadius: '50%',
});

const CenterLine = styled('div')({
    position: 'absolute',
    width: '400px',
    height: '250px',
    borderBottom: '1px solid white'
});

const Content = styled('div')({
    width: '400px',
    height: '500px',
    position: 'absolute',
    padding: '20px 0'
})

export { 
    Pitch,
    CenterCircle,
    CenterLine,
    Content,
}