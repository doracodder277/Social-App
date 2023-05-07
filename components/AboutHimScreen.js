import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';

const AboutHim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {Platform.OS != 'web' ? 
        <LottieView
            source={require('../Animations/79793-guy-talking-to-robot-ai-help.json')}
            autoPlay
            loop={false}
            style={styles.animation}
        /> : null
      }
      <Text style={styles.description}>
        Hi there! My name is [Your Name] and I'm excited to share a bit about myself with you. I'm a [Your Profession] by trade and I love what I do. When I'm not working, I enjoy [Your Hobbies/Interests].
      </Text>
      <Text style={styles.description}>
        I'm passionate about [Your Passions], and I'm always looking for ways to make a positive impact in the world. One of my biggest strengths is [Your Strengths], and I try to use this to help others whenever I can.
      </Text>
      <Text style={styles.description}>
        I'm also a [Your Personality Traits], and I love connecting with new people and learning about their experiences. I'm looking forward to getting to know you better and building a strong relationship through this app.
      </Text>
      {Platform.OS != 'web' ? 
        <TouchableOpacity onPress={() => navigation.navigate('Loading', {name: 'Form', text: "Now It's your turn.."})}>
          <LottieView
              source={require('../Animations/124161-next-button-pressing.json')}
              autoPlay
              loop
              style={styles.animation2}
          /> 
        </TouchableOpacity> : null
      }
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

export default AboutHim;