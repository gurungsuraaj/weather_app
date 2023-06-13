import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    text: {
        small: {
            fontSize: 12,
            color: '#6A6D89'
        },

        medium: {


            fontSize: 16,
            color: '#6A6D89'
        },

        large: {
            fontSize: 18,
        }
    },
    chip: {
        backgroundColor: '#F6F6FB',
        justifyContent: 'space-around',
        width: 60,
        height: 100,
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 15,
        marginVertical: 20,
    },
    list: {
        flexDirection: 'row',
    }
});

export default styles;