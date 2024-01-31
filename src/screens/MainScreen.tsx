import { View, Text, StatusBar, StyleSheet, Image,  FlatList, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { getMyLocation } from '../components/functions/GetLocation';
import { useDispatch, useSelector } from 'react-redux';
import { GetWeather } from '../redux/slices/GetWeather';
import Location from '../assets/icons/Location';
const { width, height } = Dimensions.get('window');



const MainScreen = ({navigation}:any) => {
  const dispatch: any = useDispatch();
  const weatherData = useSelector((state: any) => state.GetWeather);
  const [isLoading, setisLoading] = useState(true)

  const mainFunction = async () => {
    getMyLocation()
      .then((location: any) => {
        dispatch(GetWeather(location));
        setisLoading(false);

      })
      .catch((error) => {
        console.error('xeta:', error);
      });
  }

  const renderWeatherItem = ({ item }: any) => (
    <View style={styles.weatherItem}>
      <Text>{item.dt_txt}</Text>
      <Text>Temperature: {item.main.temp} °C</Text>
      <Image
        style={{ width: 30, height: 20 }}
        source={{
          uri: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
        }}
      />
    </View>
  );
  useEffect(() => {
    mainFunction()
  }, [dispatch,weatherData]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
      <LinearGradient colors={['#282D37', '#D99B66']} style={styles.linearGradient}>
        {isLoading ? (
          <View style={{ alignItems: "center", justifyContent: "center", top: height * 0.5 }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.allweather}>
              <View>
                <View style={styles.locationContainer}>
                  <Location />
                  <Text style={styles.locationText}>{weatherData?.data.city?.name}</Text>
                </View>
                {
                  weatherData.data.list && (
                    <View style={styles.weatherImageContainer}>
                      <Image
                        style={styles.weatherImage}
                        source={{
                          uri: `https://openweathermap.org/img/w/${weatherData?.data.list[0].weather[0].icon}.png`,
                        }}
                      />
                      <Text style={styles.temperatureText}>
                        Temperature: {weatherData.data.list[0].main.temp} °C
                      </Text>
                    </View>
                  )
                }
              </View>
              <View style={styles.flatListContainer}>
                {weatherData && weatherData.data.list && (
                  <FlatList
                    data={weatherData.data.list}
                    keyExtractor={(item) => item.dt.toString()}
                    renderItem={renderWeatherItem}
                  />
                )}
              </View>
            </View>
            <View style={{ bottom: height * 0.1, alignItems: "center" }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("SearchWeatherScreen")}>
                <Text style={styles.buttonText}>
                  Search another Locations
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    width: width * 0.7,
    height: height * 0.05,
    backgroundColor: "#282D37",
    borderRadius: width * 0.04,
    alignItems: "center",
    justifyContent: "center"
  }
  ,
  buttonText:{
    fontSize: width * 0.04, 
    color: "white" 
  },
  linearGradient: {
    flex: 1,
  },
  locationContainer: {
    top: height * 0.06,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: width * 0.03,
  },
  locationText: {
    color: 'white',
    fontSize: width * 0.05,
  },
  weatherImageContainer: {
    top: height * 0.03,
    alignItems: 'center',
  },
  weatherImage: {
    width: width * 0.4,
    height: height * 0.2,
    top: height * 0.02,
  },
  temperatureText: {
    fontSize: width * 0.05,
  },
  flatListContainer: {
    top: height * 0.1,
    flex: 1,
  },
  weatherItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  }, allweather: {
    flex: 1,
    paddingBottom: height * 0.3
  }
});

export default MainScreen;
