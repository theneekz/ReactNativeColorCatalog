import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { useColors } from '../hooks';

export default function ColorButton({ backgroundColor, onPress = (f) => f }) {
  const { removeColor } = useColors();
  const deleteButton = [
    <TouchableHighlight
      style={[styles.delete]}
      onPress={() => removeColor(backgroundColor)}
    >
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableHighlight>,
  ];

  return (
    <Swipeable rightButtons={deleteButton}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => onPress(backgroundColor)}
        underlayColor="grey"
      >
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor }]} />
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  delete: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
    width: 75,
  },
  deleteText: {
    fontSize: 30,
    marginTop: 5,
  },
});
