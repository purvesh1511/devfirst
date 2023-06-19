import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity,Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import styles from '../styles/home';



const Home = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <View style={styles.container}>
            <Image style={ styles.welcomeImage } source={ images.welcome } />
            <Text style={ styles.welcome }>Welcome to Meditax!</Text>
            <Text style={ styles.txtMedium }>The best online doctor apointment & consultation app of the century for your health and medical needs!</Text>
            <TouchableOpacity onPress={() => router.push('login')} style={styles.nextBtn}><Text style={{ color:"#fff" }}>Next</Text></TouchableOpacity>
        </View>
    )
}

export default Home;