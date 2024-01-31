import Geolocation from "@react-native-community/geolocation";
import { Alert, Linking, PermissionsAndroid, Platform } from "react-native";


const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);

      if (
        granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
};

export const getMyLocation = async () => {
  const hasLocationPermission = await requestLocationPermission();

  if (hasLocationPermission) {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (error) => {
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  } else {
    Alert.alert(
      'Location permission',
      'You must allow the app to access your location information.',
      [
        {
          text: 'Ayarlar',
          onPress: () => {
            Linking.openSettings();
          },
        },
        {
          text: 'Legv',
          style: 'cancel',
        },
      ]
    );
  }
};

