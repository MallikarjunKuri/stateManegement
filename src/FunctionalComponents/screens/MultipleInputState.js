import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MultipleInputState = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = () => {
    alert(`Name: ${name}, Age: ${age}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default MultipleInputState;
