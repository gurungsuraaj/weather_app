import { Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../Forecast/styles'
import { getWeatherForecast } from '../../services/api'
import WeatherCard from '../WeatherCard';
import Header from '../AppHeader';
import { getPlaceName } from '../../utils/helperFunctions';
import { Snackbar } from 'react-native-paper';

const Forecast = ({ latitude, longitude }) => {
    const [forecastData, setForecastData] = useState(null);
    const [locationName, setLocationName] = useState('');
    const [visible, setVisible] = React.useState(false);

    const fetchWeatherForecast = async () => {
        // Get weather forecast based on latitude and longitude
        try {
            const data = await getWeatherForecast(latitude, longitude);

            const placeName = await getPlaceName(latitude, longitude);
            setLocationName(placeName);
            setForecastData(data);
        } catch (error) {
            console.error('Error fetching weather forecast:', error);
            setForecastData(null);
        }
    };

    useEffect(() => {
        // Fetch weather forecast when latitude and longitude changes
        fetchWeatherForecast();
    }, [latitude, longitude]);



    const refreshWeatherForecast = () => {
        // Refresh weather forecast when user pulls the screen down
        fetchWeatherForecast();
        onToggleSnackBar();
        setTimeout(dismissSnackbar, 3000);
    };


    const onToggleSnackBar = () => setVisible(!visible);

    const dismissSnackbar = () => {
        setVisible(false);
    };

    return (<>

        <View style={styles.container}>
            <Header title={locationName} refresh={refreshWeatherForecast} />

            {(forecastData !== null) ? (
                <ScrollView showsVerticalScrollIndicator={false} >
                    {forecastData.daily.slice(0, 5).map((forecast, i) => (

                        <WeatherCard forecast={forecast} key={i} />

                    ))}
                </ScrollView>
            ) : (
                <Text>Loading weather forecast...</Text>
            )}

            <Snackbar
                visible={visible} wrapperStyle={{ bottom: 0 }} duration={Snackbar.LENGTH_SHORT} onDismiss={onToggleSnackBar}
            >
                Weather forecast updated!
            </Snackbar>

        </View></>
    )

}

export default Forecast;