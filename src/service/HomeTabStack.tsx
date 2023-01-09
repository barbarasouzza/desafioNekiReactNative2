import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from '../pages/Login'
import { Cadastro } from '../pages/Cadastro'

function HomeTabStack() {
    const Stack = createStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>
    )
}

export function Routes() {
    return (
      <>
          <NavigationContainer>
            <HomeTabStack />
          </NavigationContainer>
      </>
    );
  }
  