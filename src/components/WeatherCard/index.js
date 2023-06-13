import { Text, View } from 'react-native'
import React from 'react'
import styles, { getContainerStyle } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatDateTime, getWeatherIcon } from '../../utils/helperFunctions';


const WeatherCard = ({ forecast }) => {

    const formatDateTimeForecast = (dateString) => {
        return formatDateTime(dateString);
    };
    return (
        <View style={getContainerStyle(forecast.weather[0].icon)}>
            {
                forecast ? (
                    <>
                        <Text style={styles.date}>{formatDateTimeForecast(forecast.dt)}</Text>
                        <View style={styles.description}>
                            <Text style={styles.temperature} >{forecast.temp.day.toFixed(0)}°C</Text>
                            <View style={styles.divider} />

                            <View>
                                <View style={styles.weather}>
                                    {getWeatherIcon(forecast.weather[0].icon)}
                                    <Text style={styles.weatherDescription}>{forecast.weather[0].main}</Text>
                                </View>

                                <View style={styles.temp} >
                                    <Icon name="arrow-up" size={24} color="white" style={styles.hightTemp} />
                                    <Text style={styles.text}>{forecast.temp.max.toFixed(0)}</Text>
                                    <Icon name="arrow-down" size={24} color="white" style={styles.lowTemp} />
                                    <Text style={styles.text}>{forecast.temp.min.toFixed(0)}</Text>
                                </View>
                            </View>
                        </View>
                    </>
                ) :
                    (<Text>Loading...</Text>)
            }

        </View>
    )

}

export default WeatherCard