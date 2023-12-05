import { useFonts } from 'expo-font'
import Navigation from './app/navigations/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [ fonts ] = useFonts({
    RobotoCondensedRegular:   require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    RobotoCondensedBold:      require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    RobotoCondensedLight:     require('./assets/fonts/RobotoCondensed-Light.ttf'),
    RobotoCondensedSemiBold:  require('./assets/fonts/RobotoCondensed-SemiBold.ttf'),
  });
  
  return fonts && (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
