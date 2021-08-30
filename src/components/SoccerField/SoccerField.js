import React, { forwardRef, useState, createRef } from 'react';
import { Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import { Pitch, CenterCircle, CenterLine, Content } from './style';

export default (props) => {

    return (
        <Pitch>
            <CenterLine />
            <CenterCircle />
            <Content>
                {props.children}
            </Content>
        </Pitch>
    )
};