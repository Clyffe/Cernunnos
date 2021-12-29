/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function SubmitButton({onPress}){
    const navigation = useNavigation()
    return(
    <View style={styles.buttonContainer}>
        <TouchableHighlight
        underlayColor='rgba(175, 47, 47, .75)'
        activeOpacity={1.0}
        style={styles.button}
        onPress={onPress}>   
            <Text style={styles.submit}>
            Submit
            </Text>
        </TouchableHighlight>
    </View>
    )
}

/* Line 20 attaches navigation to the onPress function available to the TouchableHighlight component. 
This function will be called when the TouchableHighlight is touched or pressed.*/

const styles = StyleSheet.create({
    buttonContainer: {
    alignItems: 'flex-end'
    },
    button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'
    },
    submit: {
    color: '#666666',
    fontWeight: '600'
    }
})
export default SubmitButton;