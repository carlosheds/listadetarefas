import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from 'react-native';
import Tarefa from "./src/pages/Tarefas";
import NovaTarefa from "./src/pages/NovaTarefa";
import Detalhes from "./src/pages/Detalhes";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tarefa'>
        <Stack.Screen
          name="Tarefas"
          component={Tarefa}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />

        <Stack.Screen
          name="Novas Tarefas"
          component={NovaTarefa}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
