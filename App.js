// App.js
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import TaskScreen from './screens/TaskScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  if (loading) {
    // show a loading spinner while checking auth
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          // If not logged in, show Auth screen
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : (
          // If logged in, show Tasks and AddTask screens
          <>
            <Stack.Screen
              name="Tasks"
              component={TaskScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddTask"
              component={AddTaskScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
