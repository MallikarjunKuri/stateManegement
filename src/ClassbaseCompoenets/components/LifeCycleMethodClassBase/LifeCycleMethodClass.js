import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LifeCycleMethodClass extends Component {//we have created a class component with a method called LifeCycleMethod. 
    constructor(props) {//its method used to initialize the an object state(intialize local state data==this.state) of the component its autometically called during the creation of object in a class
        super(props);//in first line of costructor we must call super() method. otherwise object showing the data is undefined
        console.log('constructor');
        this.state = {//local state data,we cannot call setState() directly inside constructor
            count: 0,//if the component need to use local state we need to use this.state to assign the initial state to the component or constructor
        };
    }
//here we are using life cycle methods for featching data its same like useEffect hook 
    componentDidMount() {
        this.updateCount();
        console.warn('componentDidMount');
    }
//this life cycle method will call when you are going to update somthing that time it will call this method(always its going to render first after that its calling componentdidupdate)
    componentDidUpdate(prevProps, prevState) {//based on state and props its going to update means if  props going to change the state that time 
        if (prevState.count !== this.state.count) {//based on logic we need to update the count or state
            this.updateCount();
            console.warn('componentDidUpdate');
        }
    }

    updateCount = () => {
        const { count } = this.state;
        if (count <= 29) {//its start looping rendering the count and updating the count itself so that we don't have to worry about updating the count again later when the count changes to 19 
            this.setState({ count: count + 1 });
        }
    };

    render() {//in our component first calls constructor after that it calls render method.after rendering the its going to call the componentdidmount method
        const { count } = this.state;//object for accessing the count value from the component state property, destructuring value using insaid here it means it extract the count from local state.
        console.warn("render");

        return (
            <View>
                <Text>{count}</Text>
            </View>
        );
    }
}

export default LifeCycleMethodClass;



//constuctor calls first 
//render method after
//useEffect later 1)componentdidmount
                //2)componentdidUpdate
                //3)componentdidUnmount