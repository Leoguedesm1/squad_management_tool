import React from 'react';
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