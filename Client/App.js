import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const axios = require('axios').default;
import * as Application from 'expo-application';

function HomeScreen({ navigation }) {
  return (
      
    // <div style={{width: '380px', border: '1px solid blue'}}>
      <View style={{ alignItems: 'left', flexDirection: "row", padding: '20px', border: '1px solid black' }}>
        <TouchableOpacity 
          style={{width: "150", alignItems: 'center'}}
          onPress={() => navigation.navigate('Historial')} >
          <Image source={require('./assets/icons/medical-history.png')} 
            style = {{ width: 100, height: 100 }} />
          <Text>Historial médico</Text>
        </TouchableOpacity>
      </View>
    // </div>
  );
}

function HistorialMedicoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Historial médico</Text>
      <Button onPress={async () => {await readPersonalInfo(); }} title="test" />
      <Text> test: { Application.applicationId } </Text>
    </View>
  );
}



async function readPersonalInfo()
{

  await axios.post(
    'https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/personalinfo', {
      id: '11'
    }
  )
  // await axios.get(
  //    'https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/personalInfo/1'    
  // )
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

function CalendarioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendario</Text>
    </View>
  );
}

function LaboratorioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Laboratorio</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HC Cloud">
        <Stack.Screen name="HC Cloud" component={HomeScreen} />
        <Stack.Screen name="Historial" component={HistorialMedicoScreen} />
        <Stack.Screen name="Calendario" component={CalendarioScreen} />
        <Stack.Screen name="Laboratorio" component={LaboratorioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
