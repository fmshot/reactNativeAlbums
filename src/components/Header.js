// Import libraries for creating a component
import React from 'react'; 
// import ReactNative from 'react-native';
import { Text, View } from 'react-native';


// Make a component 
const Header = (props) => { 
        const { textStyle, viewStyle } = styles;

        return ( 
                <View style={viewStyle}>
                        <Text style={textStyle}>{props.headerText}</Text>
                </View>
        );
};

const styles = {
        viewStyle: {
                backgroundColor: '#f2fff9',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                padding: 5,                
                elevation: 20,
                position: 'relative'

        },
        textStyle: {
                fontSize: 20,
                // justifyContent: 'center'
        }
};
// Make the component avaiilable to other parts of the app
export default Header;