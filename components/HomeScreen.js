// HomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';
import globalStyles from '../Styles';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground
              source={require('../assets/nathan-dumlao-EdULZpOKsUE-unsplash.jpg')}
              resizeMode='cover'
              style={{ ...styles.container, width: '100%' }}
            >
                {Platform.OS != 'web' ? <LottieView
                    source={require('../Animations/137171-welcome-hand.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                /> : null}

                <Text style={{...styles.header, ...globalStyles.primaryColor}}>Welcome to My Social App!</Text>
                <Button
                  icon="heart"
                  mode="contained"
                  style={{ backgroundColor: globalStyles.primaryColor.color, borderRadius: 30, elevation: 5 }}
                  textColor="#fff"
                  onPress={() => {
                      navigation.navigate('Loading', {name: 'About', text: ''});
                  }}
                >
                    Start Tour
                </Button>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        justifyContent: 'flex-start'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        width: '50%',
    },
    animation: {
        marginBottom: 50,
        width: 200,
        height: 300,
    }
});

export default HomeScreen;
