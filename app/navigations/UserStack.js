import Home from '../screens/Home/Home';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function UserStack() {    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="home" 
                component={ Home } 
                options={{ 
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}