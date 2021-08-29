import React, { forwardRef, useState, createRef } from 'react';
import { Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import { StyledCardHeader, StyledCard } from './style';

export default forwardRef((props, ref) => {

    const cardHeaderClasses = StyledCardHeader();

    return (
        <StyledCard>
            <CardHeader 
                title={props.title}
                action={props.action}
                classes={cardHeaderClasses}
            />

            <Divider light />
            
            <CardContent>
                {props.children}
            </CardContent>
        </StyledCard>
    )
});