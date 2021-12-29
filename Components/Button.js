/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { current } from './Styles/themes';

function Button(){
    const navigation = useNavigation()
    return(
    <View style={styles.buttonContainer}>
        <TouchableHighlight
        underlayColor='rgba(175, 47, 47, .75)'
        activeOpacity={1.0}
        style={styles.button}
        onPress={() => {
            navigation.navigate("New Medication");
          }}>   
            <Text style={styles.submit}>
            +
            </Text>
        </TouchableHighlight>
    </View>
    )
}

/* Line 20 attaches navigation to the onPress function available to the TouchableHighlight component. 
This function will be called when the TouchableHighlight is touched or pressed.*/

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end',
        shadowColor: '#010101',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      

        },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 15,
        backgroundColor: 'rgba(175, 47, 47, .5)',
        width: 50,
        marginRight: 20,
        marginTop: 15,
        borderColor: 'rgba(0,0,0,.1)',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    submit: {
    color: '#ffffff',
    fontWeight: '600'
    }
})

export default Button;