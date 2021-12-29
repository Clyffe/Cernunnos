import React, { useContext } from 'react';
import { Text, ScrollView, StyleSheet, Alert } from 'react-native';

import { RowItem, RowSeparator } from '../Styles/RowItem';

import ThemeProvider, { ThemeContext, } from '../utils/ThemeManager';

import { current } from '../Styles/themes';

function ThemeScreen(){
    const { toggleTheme } = useContext(ThemeContext);
 
    return (
            <ScrollView style={styles.row}>
                <RowItem
                    title="Light theme"
                    onPress={toggleTheme}/>
                <RowSeparator />
                <RowItem 
                    title="Dark Theme"
                    onPress={() => alert('Dark!')}/>
                <RowSeparator />
                <RowItem
                    title="Material Blue"
                    onPress={() => alert('Material blue!')}/>
                <Text></Text>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: current.card,
      },
});

export default ThemeScreen