import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  TouchableHighlight,
  Button,
  Alert
} from 'react-native';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text> I love harri.</Text>

      <Button  color="orange" title="Click Me" onPress={()=>Alert.alert("My title", "My message", [
        {text: "yes", onPress: () => console.log("yes clicked")},
        {text: "No", onPress: () => console.log("no clicked")}
        ])}/>
            
      <Button  color="blue" title="Click Me2" onPress={()=>Alert.prompt("My title", "My message", text =>  console.log(text))}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
