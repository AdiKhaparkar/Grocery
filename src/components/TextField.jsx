import React from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ErrorMessage from './ErrorMessage';

export default function TextField(props) {
  const {name, text, placeholder, value, onPress, onChangeText} = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInput}>
        <AntDesign name={name} size={20} style={{margin: 15}} />
        <TextInput
          placeholder={placeholder}
          value={value}
          onBlur={onPress}
          onChangeText={onChangeText}
          placeholderTextColor="black"
        />
      </View>
      <ErrorMessage>{text}</ErrorMessage>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    padding: Platform.OS === 'ios' ? 25 : 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
  },
});
