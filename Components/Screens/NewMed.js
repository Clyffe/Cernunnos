import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TextInput,
} from 'react-native';

import HeadingLight from "../headingLight";
import Input from '../Input';
import SubmitButton from "../SubmitButton";

import uuidV4 from 'uuid/v4'
import { current } from '../Styles/themes'
import { useNavigation } from '@react-navigation/native';

class newMedScreen extends React.Component{
    
    // Set the default state
    state = {
        med: '',
        dose: ''
      }
      // onChangeText method to set the state to match the input value
      onChangeText = (key, value) => {
        this.setState({ [key]: value })
        console.log(value)
      }

    // Triggered when submit button is pressed
      submit = () => {
          // If one or both fields are empty, alert and return
        if (this.state.med === '' || this.state.dose === ''){ 
            alert('Please fill out both fields')
            return
        }
        // Create the 'med' object, setting the state equal to the input, and giving it a unique ID
        const med = {
          med: this.state.med,
          dose: this.state.dose,
          id: uuidV4(),
        }
        console.log(med)
        // Set the input fields back
        this.setState({
          med: '',
          dose: ''
        }, () => {
            // Go to the home screen
          this.props.navigation.navigate('Home', med)
        })
      }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <HeadingLight message="new med"/>
                    <TextInput
                        placeholder='Medication name'
                        onChangeText={val => this.onChangeText('med', val)}
                        style={styles.input}
                        value={this.state.med}
                    />
                    <HeadingLight message = "dose"/>
                    <TextInput
                        placeholder='Dosage'
                        onChangeText={val => this.onChangeText('dose', val)}
                        style={styles.input}
                        value={this.state.dose}
                        keyboardType="number-pad"
                    />
                </ScrollView>
                <SubmitButton 
                onPress={this.submit}/>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: current.background,
        paddingTop: 25,
    },
    content: {
      flex: 1,
    },
    text: {
      textAlign: "center",
      color: current.text
  },
  input: {
    height: 40,
    backgroundColor:'#ffffff',
    paddingRight: 10, 
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000'
}
});

export default newMedScreen