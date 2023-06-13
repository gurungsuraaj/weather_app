import { StyleSheet } from 'react-native';

export const getContainerStyle = (weatherCondition) => {
    // Get weather icon based on condition
    switch (weatherCondition) {
        case '01d':
        case '01n':
            return styles.container;
        case '02d':
        case '02n':
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return styles.cloudyContainer;
        case '09d':
        case '09n':
        case '10d':
        case '10n':
            return styles.rainyContainer;
        default:
            return styles.container;

    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FA951D',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        width: '100%',
        borderRadius: 20,
    },
    cloudyContainer: {
        backgroundColor: '#6A6D89',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        width: '100%',
        borderRadius: 20,
    },
    rainyContainer: {
        backgroundColor: '#8D9FF1',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        width: '100%',
        borderRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    temperature: {
        fontSize: 40,
        marginBottom: 8,
        color: 'white'
    },
    description: {
        fontSize: 14,
        flexDirection: 'row',
        alignItems: 'center',


    },
    date: {
        fontSize: 18,
        marginTop: 0,
        marginBottom: 10,
        color: 'white'
    },
    chip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FEFEFF',
        opacity: 0.7,
        alignItems: 'center',
        padding: 8,
        borderRadius: 15,
        fontSize: 14,
    },
    circle: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 70,
        height: 70,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 20,
        backgroundColor: 'silver',
        overflow: 'hidden',
    },
    divider: {
        width: 3,
        height: '100%',
        backgroundColor: 'white',
        marginHorizontal: 20
    },
    weather: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    weatherDescription: {
        color: 'white',
        paddingLeft: 10,
    },
    hightTemp: {
        marginRight: 5,
    },
    lowTemp: {
        marginHorizontal: 5,
    },
    text: {
        color: 'white',
    },



    // Add more styles as needed
});

export default styles;
