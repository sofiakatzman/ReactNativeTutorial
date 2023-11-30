import React from "react";
import {
  SafeAreaView,
  Text, 
  StyleSheet,
  View
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 


const App = () => {

  return(
    <SafeAreaView style={styles.wrapper} >
      <View style={styles.container}>
      <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like: 5</Text>
          <View style={styles.highLowWrapper}> 
            <Text style={styles.highLow}>High: 8 </Text>
            <Text style={styles.highLow}>Low: 6</Text>
          </View>
      </View>
      <View style={styles.bodyWrapper}>
            <Text style={styles.description}>It's sunny</Text>
            <Text style={styles.message}>It's perfect t-shirt weather</Text>
            
          </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  }
  ,
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignContent: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 38,
  },
  message: {
    fontSize: 30,
  },

})

export default App;