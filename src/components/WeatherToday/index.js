import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../WeatherToday/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default WeatherToday = () => {
    const data = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.text.large}>Weather for today</Text>
            <View style={styles.list}>
                {data.map((item, i ) => (
                    <View style={styles.chip} key={i}>
                        <Text>2 PM</Text>
                        <Icon name="weather-sunny" size={34} color="#6A6D89" />
                        <Text>27°C</Text>

                    </View>
                ))}
            </View>


        </View>
    )

}