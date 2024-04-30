import React, { useState } from 'react';

const FunctionState = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={incrementCounter} />
    </View>
  );
};

export default FunctionState;