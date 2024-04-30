import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class CountLifeCycleMethod1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  navigateToNextScreen = () => {
    // Assuming you're passing navigation prop to this component
    this.props.navigation.navigate('LifeCycleMethodClass');
  };

  render() {
    console.log('Render called');
    return (
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <TouchableOpacity onPress={this.incrementCount}>
          <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white' }}>Click Me</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>Count: {this.state.count}</Text>
        <TouchableOpacity onPress={this.navigateToNextScreen}>
          <View style={{ marginTop: 20, backgroundColor: 'green', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white' }}>Go to Next Screen</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}

export default CountLifeCycleMethod1;
