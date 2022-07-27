import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-web';
import stylesa from './components/StySheet';
import TextInputExample from './components/TextInputExample';
import Cat from './components/Cat';
import Cafe from './components/Cafe';
import Logo from './components/Logo';

export default function App() {

  const showData = () => {
    alert("Hello Motherfucker")
    window.location = 'https://github.com/dragon150766/ReactionP001/tree/master';
  }

  return (

    <View style={stylesa.container}>
    {/* <Text style={[stylesa.title]}>TNI-React Natives</Text>
    <TextInputExample/>
    <Cafe/> */}
    <Logo/>
    <Button
    onPress={showData}
      title='Do not Click Me'
    />

  </View>

  );
}


