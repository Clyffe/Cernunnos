/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

import { current } from './Styles/themes';


const Heading = ({message}) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            {message}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 5,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 64,
        color: current.accent,
        fontWeight: '100',
    }
});

export default Heading;