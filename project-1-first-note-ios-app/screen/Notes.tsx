import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './reduxwithtx/hooks';
import { addNote, selectNotes } from './reduxwithtx/noteslice';

const Notes = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);
  console.log('notes', notes);

  const handleAddNote = () => {
    console.log('Notes');
    if (!title.trim() || !desc.trim()) return;
    dispatch(addNote({ title, desc }));
    setTitle('');
    setDesc('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Notes</Text>

      <TextInput
        placeholder="Title"
        style={styles.txtInput}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Description"
        style={styles.txtInput}
        value={desc}
        onChangeText={setDesc}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>Add note</Text>
      </TouchableOpacity>
      <View style={{ height: 200 }}>
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{ borderBottomWidth: 1, marginVertical: 8, padding: 4 }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {item.title}
              </Text>
              <Text>{item.desc}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Notes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
  },
  txtInput: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginVertical: 5,
    height: 50,
    width: '90%',
    padding: 8,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '90%',
    height: 50,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  noteItem: {
    borderBottomWidth: 1,
    marginVertical: 8,
    padding: 4,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
