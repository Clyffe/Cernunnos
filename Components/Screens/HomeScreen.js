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
import CenterMessage from "../centerMessage";
import { useNavigation } from '@react-navigation/native';
import ThemeProvider, { ThemeContext, } from '../utils/ThemeManager';
import { current } from '../Styles/themes';

function HomeScreen({route, navigation}){

    React.useEffect(() => {
        if (route.params?.med) {
          // Post updated, do something with `route.params.med`
          // For example, send the med to the server
        }
      }, [route.params?.med]);


      var meds = []
      meds.push(route.params?.med)

    const { currentTheme } = useContext(ThemeContext);
    console.log(currentTheme)
        return(
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <Heading message="meds" />
                {meds.length && <CenterMessage message = "No meds! Hit the + button to add a med!"/>}
            </ScrollView>
            <Button />
        </View>
    )
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
        color: "#333333"
    }
});


export default HomeScreen
