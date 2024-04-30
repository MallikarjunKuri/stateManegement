import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const LifeCycleMethodFunction = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        updateCount();
        console.warn('componentDidMount');
    }, []);

    useEffect(() => {
        if (count <= 89) {
            updateCount();
            console.warn('componentDidUpdate');
        }
    }, [count]);

    const updateCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    // console.warn("render");

    return (
        <View>
            <Text>{count}</Text>
        </View>
    );
};

export default LifeCycleMethodFunction;
