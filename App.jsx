// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MentorListScreen from './MentorListScreen';
import MentorDetailScreen from './MentorDetailScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="MentorList"
          component={MentorListScreen}
          options={{ title: 'Mentors' }}
        />
        <Stack.Screen
          name="MentorDetail"
          component={MentorDetailScreen}
          options={{ title: 'Mentor Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React from 'react';
// import AppNavigator from './navigation/AppNavigator';

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;