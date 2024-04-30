import React, { useState } from 'react';

const ObjectState = () => {
  const [user, setUser] = useState({ name: 'John', age: 30 });

  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
    </View>
  );
};
export default ObjectState;