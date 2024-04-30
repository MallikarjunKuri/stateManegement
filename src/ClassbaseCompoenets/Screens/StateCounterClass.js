import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// We define a class CounterComponent that extends Component.
class StateCounterClass extends Component {
    // In the constructor, we initialize the component's state with { count: 0 }.
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

//   We define the incrementCount method, which uses this.setState() to update the count state variable by 1.
  incrementCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        {/* In the render method, we render the current value of count inside a Text component and
        //  a Button component that, when pressed, calls the incrementCount method. */}
        <Button
          title="Increase Count"
          onPress={this.incrementCount}
        />
      </View>
    );
  }
}

export default StateCounterClass;
