// Import libraries for creating a component
import React, { Component } from 'react'; 
// import ReactNative from 'react-native';
import {View } from 'react-native';

// Make a component 
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        boderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 7,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;