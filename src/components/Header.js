import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'red',
        shadowOffset: {width:12, height: 12},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 30,
        color: 'black'
    }
}

export default Header;