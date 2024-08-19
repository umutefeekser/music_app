import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },

    image: {
        width: 80,
        height: 80,
        margin: 5,
        borderRadius: '100%'
    },

    inner_container: {
        flex: 1,
        marginLeft: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    bottom_inner:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    artist: {
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 10
    },

    year: {
        fontSize: 12,
        color: 'gray'
    },

    soldOut: {
        color: 'red',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        marginRight: 5,
        fontSize: 12,
        padding: 5
    }
})