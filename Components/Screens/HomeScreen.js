import React, {useContext} from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
} from 'react-native';

import Heading from '../heading';
import Button from "../Button";
import { useNavigation } from '@react-navigation/native';
import ThemeProvider, { ThemeContext, } from '../utils/ThemeManager';
import { current } from '../Styles/themes';

function HomeScreen(){

    const { currentTheme } = useContext(ThemeContext);
    console.log(currentTheme)

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
            color: "#333333"
        }
    });

        return(
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <Heading message="meds" />
            </ScrollView>
            <Button />
        </View>
    )
}


export default HomeScreen
