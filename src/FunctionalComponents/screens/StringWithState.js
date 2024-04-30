import React, { useState } from 'react';
import { Button, View } from 'react-native';

const StringWithState = () => {
  const [text, setText] = useState('Initial string value');

  return (
    <View>
    <Text>{text}</Text>
    <Button>
      <Text onPress={() => setText('New string value')}>
        Click me
      </Text>
    </Button>
    </View>
  );
};
export default StringWithState;