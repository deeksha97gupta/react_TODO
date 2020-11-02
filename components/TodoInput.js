import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const TodoInput = props => {
   const [enterInput, setEnterInput] = useState('');

   const goalInputHandler = (enteredText) => {
    setEnterInput(enteredText);
   };

   const addGoalHandler = () => {
    props.onAddItem(enterInput);
    setEnterInput('');
   }

   return (
    <View style={styles.inputContainer}>
        <TextInput
            placeholder="Enter Something"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enterInput}
        />
        <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '75%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginRight: 10
    },
    button: {
      width: '30%',
    }
});

export default TodoInput;