import React from 'react';
import { Header, Left, Icon } from "native-base";
import { CustomHeaderStyle } from '../utils/Styles';

const CustomHeader = props => (
    <Header transparent style={[ CustomHeaderStyle.container , props.style ]}>
        <Left>
            <Icon name='menu' color='black' onPress={(e) =>  props.onClickAction() }/>
        </Left>
    </Header>
)

export default CustomHeader;