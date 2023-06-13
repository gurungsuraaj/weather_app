import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Replace with the appropriate icon library

const WeatherIcon = ({ weatherCondition }) => {
    const weatherIcons = {
        Clear: 'weather-sunny',
        Clouds: 'weather-cloudy',
        Rain: 'weather-rainy',
        // Add more weather conditions and their corresponding icon names here
    };

    const iconSize = 34; // Define the size of the icon

    const getWeatherIcon = (condition) => {
        const iconName = weatherIcons[condition] || 'question-circle'; // Use a default icon for unknown conditions
        return <Icon name={iconName} size={iconSize} />;
    };

    return (
        <View>
            {getWeatherIcon(weatherCondition)}
        </View>
    );
};

export default WeatherIcon;
