import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { 
  Appetizer, 
  Maki,
  Nigiri,
  Roll,
  Salad,
  Sashimi,
  Udon  
} from './screens'

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Appetizer">
        <Drawer.Screen name="Appetizer" component={Appetizer} />
        <Drawer.Screen name="Maki" component={Maki} />
        <Drawer.Screen name="Nigiri" component={Nigiri} />
        <Drawer.Screen name="Roll" component={Roll} />
        <Drawer.Screen name="Salad" component={Salad} />
        <Drawer.Screen name="Sashimi" component={Sashimi} />
        <Drawer.Screen name="Udon" component={Udon} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}