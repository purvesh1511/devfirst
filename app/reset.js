import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button,TouchableOpacity } from "react-native";
import { Link, Stack,useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import styles from '../styles/home';

const Reset = () => {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const handleLogin = () => {
        // Perform login logic here
        console.log('confirm_password:', confirm_password);
        console.log('Password:', password);
    };
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f5f5f5" }}>
            <Image style={ styles.logo } source={ images.logo } />
            <Text style={ styles.titleLarge }>Reset Password?</Text>
            <Text style={styles.txtMedium}>Your New Password must be diffrent from Privious used password.</Text>
            <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} value={password} />
            <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={text => setConfirmPassword(text)} value={confirm_password} />
            <TouchableOpacity style={styles.nextBtn}><Text style={{ color:"#fff" }}>RESET PASSWORD</Text></TouchableOpacity>
        </View>
    )
}

export default Reset;