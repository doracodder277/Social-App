import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Loading = ({ route, navigation }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
        	navigation.pop();
          navigation.navigate(route.params.name);
        }, 1900);
        return () => clearTimeout(timeoutId);
      }, [navigation]);
  return (
    <View style={styles.container}>
      {Platform.OS != 'web' ? 
        <LottieView
            source={require('../Animations/140468-bound-loading.json')}
            autoPlay
            loop
            style={styles.animation}
        /> : null
      }
      <Text style={styles.description}>
       {route.params.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -20
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  animation: {
    width: 200,
    height: 300,
    marginTop: -20,
    marginBottom: -30
  },
  animation2: {
    width: 200,
    height: 100,
  }
});

export default Loading;