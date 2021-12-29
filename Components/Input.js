/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet, 
    TextInput, 
    View 
} from 'react-native';

const Input = ({value, onChangeText, placeholder}) => (
    <View style={styles.inputContainer}>
        <TextInput value={value}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#CACACA"
            selectionColor = "#666666"
            onChangeText = {onChangeText}
            />
    </View>
);

const styles = StyleSheet.create({
    inputContainer:{
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2} 
    }, 
    input: {
        height: 40,
        backgroundColor:'#ffffff',
        paddingRight: 10, 
        paddingLeft: 10,
    }
})

export default Input;