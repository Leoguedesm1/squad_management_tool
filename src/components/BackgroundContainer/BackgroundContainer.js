import React from 'react';
import { Container } from './style';

export default ({ children }) => {
    return (
        <Container container>
            {children}
        </Container>
    )
}