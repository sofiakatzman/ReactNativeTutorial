import React from "react";
import {
  SafeAreaView,
  Text, 
  StyleSheet,
  View
} from 'react-native';


const App = () => {

  return(
    <SafeAreaView style={styles.wrapper} >
      <View style={styles.container}>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like: 5</Text>
          <View style={styles.highLowWrapper}> 
            <Text style={styles.highLow}>High: 8 </Text>
            <Text style={styles.highLow}>Low: 6</Text>
          </View>
      </View>
      <View style={styles.bodyWrapper}>
            <Text style={styles.description}>It's sunny</Text>
            <Text style={styles.message}>It's perfect t-Shirt weather</Text>
          </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
  },
  description: {
    fontSize: 38,
  },
  message: {
    fontSize: 30,
  },

})

export default App;