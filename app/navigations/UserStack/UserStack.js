import Home from '../../screens/Home/Home';
import Editor from '../../screens/Editor/Editor';
import Search from '../../screens/Search/Search';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function UserStack() {    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="home" 
                component={ Home } 
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='editor'
                component={ Editor }
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name='search'
                component={ Search }
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}