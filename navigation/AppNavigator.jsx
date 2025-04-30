import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateTask from '../screens/CreateTask';
import DisplayTasks from '../screens/DisplayTasks';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CreateTask">
                <Stack.Screen name="CreateTask" component={CreateTask} options={{ title: 'Create Task' }} />
                <Stack.Screen name="DisplayTasks" component={DisplayTasks} options={{ title: 'Tasks List' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;