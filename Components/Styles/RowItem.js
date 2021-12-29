import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import { current } from './themes';

export const RowItem = ({ title, onPress, rightIcon }) => (
  
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {rightIcon}
  </TouchableOpacity>
);

export const RowSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    row: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: current.card,
      shadowColor: '#010101',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    title: {
      color: current.text,
      fontSize: 16,
    },
    separator: {
      backgroundColor: "#bcbcbc",
      height: StyleSheet.hairlineWidth,
      marginLeft: 20,
    },
  });