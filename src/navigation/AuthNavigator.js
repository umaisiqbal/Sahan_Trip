import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/login/Login';
import SignUp from '../screens/auth/signup/SignUp';
import StartScreen from '../screens/auth/start-screen/StartScreen';


const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
       <AuthStack.Screen
        name={'StartScreen'}
        component={StartScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
       <AuthStack.Screen
        name={'SignUp'}
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
