import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
    <View style = {styles.searchBar}>
    <Text style={styles.red}>just red</Text>
    </View>
    <View> </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    color: "green",
     flex: 1, 
     alignItems: "center", 
     justifyContent: "center"
  },
  red: {
    color: 'red',
  }
  
 
});
