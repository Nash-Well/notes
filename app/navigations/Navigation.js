import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="login" 
                component={ Login } 
                options={{ 
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="register" 
                component={ Register } 
            />
        </Stack.Navigator>
    )
}