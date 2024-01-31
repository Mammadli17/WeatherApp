import { View, Text, TextInput, StyleSheet, StatusBar, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get('window');
import { useDispatch, useSelector } from 'react-redux';
import { GetWeatherByCity } from '../redux/slices/GetWeatherByCity';

const SearchWeatherScreen = () => {
    const [inputCity, setinputCity] = useState('');
    let weatherData = useSelector((state: any) => state.GetWeatherByCity);
    const dispatch: any = useDispatch();
    useEffect(() => {

    }, [dispatch, weatherData])


    const functionSearch = async () => {
        if (inputCity) {
            dispatch(GetWeatherByCity(inputCity));
            setinputCity('')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <LinearGradient colors={['#282D37', '#D99B66']} style={styles.linearGradient}>
                <View style={{ top: height * 0.04 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter city"
                        value={inputCity}
                        onChangeText={text => setinputCity(text)}
                    />
                    <Text style={styles.attentionText}>
                        Attention! Please enter the exact name of the city in English or your native language.
                    </Text>
                    <Pressable style={styles.buttonStyle} onPress={() => functionSearch()}>
                        <Text style={styles.buttonText}>
                            Search another Locations
                        </Text>
                    </Pressable>

                    {weatherData?.data?.name && (
                        <View style={styles.weatherInfo}>
                            <Text style={styles.weatherText}>{`City: ${weatherData.data.name}`}</Text>
                            <Text style={styles.weatherText}>{`Temperature: ${weatherData.data.main.temp} °C`}</Text>
                        </View>
                    )}

                </View>
            </LinearGradient>
        </View>
    )
}

export default SearchWeatherScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: height * 0.07,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        paddingHorizontal: width * 0.03,
    },
    attentionText: {
        fontSize: width * 0.04,
        color: "red",
        top: height * 0.02
    },
    buttonStyle: {
        width: width * 0.9,
        height: height * 0.05,
        backgroundColor: "#282D37",
        borderRadius: width * 0.04,
        alignItems: "center",
        justifyContent: "center",
        top: height * 0.04
    },
    buttonText: {
        fontSize: width * 0.04,
        color: "white"
    },
    weatherInfo: {
        marginTop: height * 0.04,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        top: height * 0.02
    },
    weatherText: {
        fontSize: width * 0.04,
        color: "white",
        marginBottom: 5,
    },
});
