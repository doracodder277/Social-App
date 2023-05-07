import React from 'react';
import { View, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const FormStep2 = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [flag, setFlag] = React.useState(false);

    const handleNext = () => {
        console.log(navigation);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
              source={require('../../assets/de-jesus-benitez-kEgJVDkQkbU-unsplash.jpg')}
              resizeMode='cover'
              style={{ ...styles.container, width: '100%' }}
            >
                <TextInput
                    label="Where are you from..?"
                    mode='outlined'
                    value={name}
                    style={styles.txtInput}
                    onChangeText={(text) => setName(text)}
                />
                {name && flag ? <TextInput
                    label="What do you do..?"
                    mode='outlined'
                    value={email}
                    style={styles.txtInput}
                    onChangeText={(text) => setEmail(text)}
                /> : null}
                {Platform.OS != 'web' ? 
                    <TouchableOpacity onPress={() => flag ? navigation.navigate('Loading', {name: 'Form', screen: 'Review'}) : setFlag(true)}>
                    <LottieView
                        source={require('../../Animations/124161-next-button-pressing.json')}
                        autoPlay
                        loop
                        style={styles.animation2}
                    /> 
                    </TouchableOpacity> : null
                }
            </ImageBackground>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    txtInput : {
        width: '80%',
        // backgroundColor: 'transparent'
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
    },
    animation2: {
        width: 200,
        height: 100
      }
};

export default FormStep2;
