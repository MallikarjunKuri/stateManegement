import React, { useState } from 'react';

const ArrayState = () => {
  const [list, setList] = useState(['item1', 'item2']);

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};
export default ArrayState;