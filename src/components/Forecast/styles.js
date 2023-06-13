import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex : 1,
        width: '90%',
    },
    listTile: {
        height: 60,
        marginTop: 15,
        backgroundColor: '#F6F6FB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
    },
    text: {
        small: {
            fontSize: 12,
            color : '#6A6D89',
            

        },
        medium: {
            fontSize: 16,
            color : '#6A6D89'
        },
        large: {
            fontSize: 18,
        }
    }

});

export default styles;