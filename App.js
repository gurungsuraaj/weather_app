import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import WeatherCard from './src/components/WeatherCard';
import WeatherToday from './src/components/WeatherToday';
import Forecast from './src/components/Forecast';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as Location from 'expo-location';
export default function App() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.warn('Location permission denied');
          return;
        }

        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      {location ? (
        <Forecast latitude={location.latitude} longitude={location.longitude} />
      ) : (
        <Text>Loading weather forecast...</Text>
      )}

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
