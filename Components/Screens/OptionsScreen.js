import React from 'react';
import { Text, ScrollView, Linking, Alert } from 'react-native';

import { current } from '../Styles/themes';
import { RowItem, RowSeparator } from '../Styles/RowItem';
import { useNavigation } from '@react-navigation/native';

function OptionsScreen() {
        const navigation = useNavigation()
        return (
            <ScrollView>
                <RowItem
                title="Themes"
                onPress={() => {navigation.navigate("Themes");}}
                />
                <RowSeparator />
                <RowItem
                title="Other"
                onPress={() => alert('todo!')}/>
                <RowSeparator />   
                <RowItem
                title="Data"
                onPress={() => alert('todo!')}
                />
            </ScrollView>
            )
}   

export default OptionsScreen