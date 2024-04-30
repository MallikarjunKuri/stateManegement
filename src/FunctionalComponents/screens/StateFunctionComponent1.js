import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const StateFunctionComponent1 = () => {
  //we have useState hook
  const [isVisible, setIsVisible] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [showText, setShowText] = useState(false);

  const textStyle = {
    color: isRed ? 'red' : 'black'
  };

  const renderText = () => {
    if (showText) {
      return <Text>This text is rendered conditionally!</Text>;
    } else {
      return null;
    }
  };

  return (
    <View>
      <View style={{ paddingVertical: 20 }}>
        <Button
          title={isVisible ? 'Hide' : 'Show'}
          onPress={() => setIsVisible(!isVisible)}
        />
        {isVisible && <Text>This text is {isVisible ? 'visible' : 'hidden'}!</Text>}
      </View>
      <View>
        <Button
          title={isRed ? 'Make Black' : 'Make Red'}
          onPress={() => setIsRed(!isRed)}
        />
        <Text style={textStyle}>This text changes color conditionally!</Text>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Button
          title={showText ? 'Hide Text' : 'Show Text'}
          onPress={() => setShowText(!showText)}
        />
        {renderText()}
      </View>
    </View>
  );
};

export default StateFunctionComponent1;
