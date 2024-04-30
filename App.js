import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StateCounter from './src/FunctionalComponents/screens/StateCounter';
import StateFunctionComponent1 from './src/FunctionalComponents/screens/StateFunctionComponent1';
import StateCounterClass from './src/ClassbaseCompoenets/Screens/StateCounterClass';
import StateClassComponent1 from './src/ClassbaseCompoenets/Screens/StateClassComponent1';
import MultipleInputState from './src/FunctionalComponents/screens/MultipleInputState';
import LifeCycleMethodFunction from './src/FunctionalComponents/components/LifeCycleMethodFunction/LifeCycleMethodFunction';
import LifeCycleMethodClass from './src/ClassbaseCompoenets/components/LifeCycleMethodClassBase/LifeCycleMethodClass';
import CountLifeCycleMethod1 from './src/ClassbaseCompoenets/components/LifeCycleMethodClassBase/CountLifeCycleMethod1';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="CountLifeCycleMethod1">
       <Stack.Screen name="StateCounter" component={StateCounter} />
       <Stack.Screen name="StateCounterClass" component={StateCounterClass} />
       <Stack.Screen name="StateFunctionComponent1" component={StateFunctionComponent1} />
       <Stack.Screen name='StateClassComponent1' component={StateClassComponent1}/>
       <Stack.Screen name='MultipleInputState' component={MultipleInputState}/>
       <Stack.Screen name='LifeCycleMethodFunction' component={LifeCycleMethodFunction}/>
       <Stack.Screen name='LifeCycleMethodClass' component={LifeCycleMethodClass}/>
       <Stack.Screen name='CountLifeCycleMethod1' component={CountLifeCycleMethod1}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})