import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TodoItem = props => {
    return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});
export default TodoItem;