import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ToDoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addItemHandler = (itemValue) => {
    if(itemValue.length === 0) {
      return;
    }
    setTodoItems(currentItems => [
      ...currentItems,
      {key: Math.random().toString(), value: itemValue}
    ]);
  };

  const removeItemHandler = (ItemId) => {
    setTodoItems(currentItems => {
      return currentItems.filter((item) => item.id !== ItemId);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>TODO LIST</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoItems}
        renderItem={itemdata =>
          <TodoItem
            id={itemdata.item.id}
            onDelete={removeItemHandler}
            title={itemdata.item.value}
          />} 
      />
      <View style={styles.inputContainer}>
        <ToDoInput onAddItem={addItemHandler} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  textContainer: {
    backgroundColor: 'blue',
    alignItems: 'center',
    height: 50,
  },
  text: {
    color: 'white',
    fontSize: 30
  },
  inputContainer: {
    marginBottom: 30,
    backgroundColor: 'white',
    marginLeft: 40,
    position: 'absolute',
    bottom: 0,
    zIndex: 1
  }
});
