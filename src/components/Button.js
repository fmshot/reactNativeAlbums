// Import libraries for creating a component
import React, { Component } from 'react'; 
// import ReactNative from 'react-native';
import { Text, TouchableOpacity } from 'react-native';

// Make a component 
const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        flex: 1,
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
    }
}

export default Button;