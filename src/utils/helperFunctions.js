

import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Location from 'expo-location';


export const formatDate = (dateString, format) => {
  // Format date string to a given format
  return moment(dateString).format(format);
};

export const formatDateTime = (unixTimestamp) => {
  // Format unix timestamp to a given format
  const currentDate = new Date();
  const date = new Date(unixTimestamp * 1000);

  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    return 'Today';
  }

  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};


export const getWeatherIcon = (condition) => {
  // Get weather icon based on condition
  let iconName;

  switch (condition) {
    case '01d':
    case '01n':
      iconName = 'weather-sunny';
      break;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      iconName = 'weather-cloudy';
      break;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      iconName = 'weather-pouring';
      break;
    case '11d':
    case '11n':
      iconName = 'weather-lightning';
      break;
    case '13d':
    case '13n':
      iconName = 'weather-snowy';
      break;
    case '50d':
    case '50n':
      iconName = 'weather-fog';
      break;
    default:
      iconName = 'question-circle';
      break;
  }

  return <Icon name={iconName} size={34} color='white' />;
};


export const getPlaceName = async (latitude, longitude) => {
  // Get place name based on latitude and longitude
  try {
    const reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });

    if (reverseGeocode && reverseGeocode.length > 0) {
      const { city } = reverseGeocode[0];
      return city;
    }
  } catch (error) {
    console.error('Error fetching place name:', error);
  }

  return null;
};
