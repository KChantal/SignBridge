import React from 'react';
import { useColorScheme } from '@components/useColorScheme.web';
import { StyleSheet } from 'react-native';

import EditScreenInfo from 'src/components/EditScreenInfo';
import { Text, View } from 'src/components/Themed';
import Colors, { tintColorLight, tintColorDark } from 'src/constants/Colors';

const colorScheme = useColorScheme();
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SignBridge!</Text>
      <View
        style={styles.separator}
        lightColor={tintColorLight}
        darkColor={tintColorDark}
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.title,
  },
  separator: {
    marginVertical: 90,
    height: 10,
    width: '100%',
    backgroundColor: theme.subtleHighlight,
  },
});