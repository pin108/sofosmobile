import {BottomNavigator} from '../components';

const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs');
const {createNativeStackNavigator} = require('@react-navigation/native-stack');
const {
  HomeScreen,
  ProfileScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPassword,
  SplashScreen,
} = require('../pages');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Product"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Event"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SplashScreen}
        name="SplashScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
