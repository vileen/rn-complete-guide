import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{
      padding: 50
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TextInput placeholder="Course goal" style={{ flexBasis: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10 }}/>
        <Button title="ADD"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
