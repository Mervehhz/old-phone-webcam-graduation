import {useState} from 'react';
import axios from 'axios';
import { Image, View, StyleSheet, TextInput, TouchableOpacity, Text, Linking, Alert } from 'react-native';
import TopBar from '../components/topbar';
import { useDispatch } from 'react-redux';
import styles from '../utils/style'

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo.jpg")}/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    value={username}
                    placeholderTextColor="#98999b"
                    onChangeText={(username) => setUsername(username)}
                /> 
            </View> 
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    value={password}
                    placeholderTextColor="#98999b"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                /> 
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    axios.post('http://192.168.43.120:3000/api/register', {
                        username: username,
                        password: password
                    })
                    .then(function (response) {
                        setUsername("");
                        setPassword("");
                        Alert.alert("Success", "Registered Successfully. You can login now.", [
                            {
                                text:"OK"
                            }
                        ]);
                    })
                    .catch(function (error) {
                        console.log(error.data);
                    });
                }}>
                <Text style={styles.text}>
                Create an account
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => {
                axios.post('http://192.168.43.120:3000/api/login', {
                        username: username,
                        password: password
                    })
                    .then(function (response) {
                        console.log(response);
                        dispatch({type: 'LOGIN', payload: response.data});
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}>
                <Text style={styles.text}>Login</Text> 
            </TouchableOpacity>


        </View>
    );
}