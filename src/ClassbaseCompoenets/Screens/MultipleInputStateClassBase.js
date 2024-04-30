import React, { Component } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

class MultipleInputState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: ''
    };
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleAgeChange = this.handleAgeChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleAgeChange(age) {
    this.setState({ age });
  }

  handleSubmit() {
    const { name, age } = this.state;
    Alert.alert(`Name: ${name}, Age: ${age}`);
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your name"
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          placeholder="Enter your age"
          value={this.state.age}
          onChangeText={this.handleAgeChange}
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default MultipleInputState;
