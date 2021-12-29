/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

import { current } from './Styles/themes';

const CenterMessage = ({message}) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            {message}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 48,
        color: '#000000',
        fontWeight: '100',
    }
});

export default CenterMessage;