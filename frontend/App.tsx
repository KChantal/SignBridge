import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App: FC = () => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <Text style={styles.logo}>SignBridge</Text>

      {/* Input Section */}
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.micButton}>
        <Text style={styles.micIcon}>🎤</Text>
      </TouchableOpacity>

      {/* Output Section */}
      <View style={styles.outputContainer}>
        <Text style={styles.outputText}>[Translated Text/BSL]</Text>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navItem}>History</Text>
        <Text style={styles.navItem}>Settings</Text>
        <Text style={styles.navItem}>Help</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'steelblue',
    marginTop: 50,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#fff',
  },
  micButton: {
    backgroundColor: 'lightblue',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  micIcon: {
    fontSize: 24,
    color: 'steelblue',
  },
  outputContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outputText: {
    fontSize: 16,
    color: '#999',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 60,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    borderRadius: 8,
  },
  navItem: {
    fontSize: 16,
    color: 'steelblue',
  },
});

export default App;
