import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const StateCounter = () => {
  // Define a state variable 'count' initialized to 0, and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  return (
    <View>
      {/* Inside the CounterComponent, we call useState and pass 0 as the initial value of the state variable count */}
      <Text>Count: {count}</Text>
      
      <Button
        title="Increase Count"
        onPress={() => setCount(count + 1)} // Increment count when the button is pressed
      />
      <Button
      title='Decrease Count'
      onPress={()=> setCount(count - 1)} // Decrement count if
      />
    </View>
  );
};

export default StateCounter;
