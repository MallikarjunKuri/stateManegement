import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class StateClassComponent1 extends Component {
  constructor(props) {
    super(props);
    // In the class-based component, state is initialized in the constructor using this.state.
    //  isVisible is a property of the state object, initialized to false.
    this.state = {
      isVisible: false,
      isRed: false,
      showText: false
    };
  }

  //Here after when we click on the state change function
  toggleVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  toggleColor() {
    this.setState(prevState => ({
      isRed: !prevState.isRed
    }));
  }

  toggleText() {
    this.setState(prevState => ({
      showText: !prevState.showText
    }));
  }

  render() {
    // In React class components, you typically don't destructure the state or props directly within the render() method.
    //  Instead, you access them directly from this.state and this.props. 
    // const { isVisible } = this.state;

    const textStyle = {
      color: this.state.isRed ? 'red' : 'black'
    };

    return (
      <View>
        {/* The expression this.state.isVisible ? 'Hide' : 'Show' is a conditional (ternary) operator.
         It evaluates to 'Hide' if this.state.isVisible is true, and 'Show' if it's false. */}
         {/* In the line title={this.state.isVisible ? 'Hide' : 'Show'}, 
         we're setting the title of a button based on the value of isVisible in the component's state. */}
        <Button
          title={this.state.isVisible ? 'Hide' : 'Show'}//If this.state.isVisible is true, the button will display 'Hide'otherwise the button will display 'Show
          onPress={this.toggleVisibility}//The onPress prop is set to this.toggleVisibility, 
          // which means the toggleVisibility function will be called when the button is pressed.
        />
        {/* This is a conditional rendering pattern using the logical AND (&&) operator. */}
        {/* Below the button, the text is conditionally rendered based on the value of this.state.isVisible. 
        If it's true, it displays "This text is visible!", otherwise, it displays "This text is hidden!" */}
       {this.state.isVisible && <Text>This text is {this.state.isVisible ? 'visible' : 'hidden'}!</Text>}
       <View style={{marginTop:20}}>
        <Button
          title={this.state.isRed ? 'Make Black' : 'Make Red'}
          onPress={this.toggleColor}
        />
        <Text style={textStyle}>This text changes color conditionally!</Text>
      </View>

      <View>
        <Button
          title={this.state.showText ? 'Hide Text' : 'Show Text'}
          onPress={this.toggleText}
        />
        {this.state.showText && <Text>This text is rendered conditionally!</Text>}
      </View>
      <View>
        <Button
          // title="Reset"
          // onPress={() => this.setState({isVisible: false, isRed: false, showText: false})}
          title={this.state.showText ? 'Hide Text' : ' Text'}
        />
      </View>
      </View>
    );
  }
}

export default StateClassComponent1;
