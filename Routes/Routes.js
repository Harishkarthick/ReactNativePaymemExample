import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from "../Screens/Home";
import Payment from "../Screens/Payment";

export default function Routes ({param}) {
    return(
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='Payment' component={Payment} />
        </Stack.Navigator>
    )
}