import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        // flex: 1,
        width: 300,
        height: 300,
        resizeMode:'contain'
    },
    inputView: {
        backgroundColor: "#eceff5",
        borderRadius: 15,
        width: "90%",
        height: 55,
        marginBottom: 20,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,    
        marginLeft: 20,
    },  
    button: {
        width: "90%",
        borderRadius: 15,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#27aae3",
        transition:'0.5s, transform 0.5s',
    },
    buttonDisabled: {
        width: "90%",
        borderRadius: 15,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#afdaed",
        transition:'0.5s, transform 0.5s',
    },
    text:{
        color: "#fdfefe",
        fontWeight:"bold",
    }
});


export default styles;