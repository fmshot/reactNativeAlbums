// Import libraries for creating a component
import React, { Component } from 'react'; 
// import ReactNative from 'react-native';
import { Text, View } from 'react-native';

// Make a component 
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
};

const styles = {
    containerStyle: {
        borderBottomWith: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};


export default CardSection;