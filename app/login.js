import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity,Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import styles from '../styles/home';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f5f5f5" }}>
            <Image style={ styles.logo } source={ images.logo } />
            <Text style={ styles.titleLarge }>Login to Your Account.</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)} value={email} />
            <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} value={password} secureTextEntry />
            <TouchableOpacity onPress={() => router.push('forgot')} style={{ alignItems: "flex-end", justifyContent: "flex-end" }}><Text style={{ marginTop:25,fontSize:18,alignItems:"flex-end" }}>Forgot the password?</Text></TouchableOpacity>
            <TouchableOpacity style={ styles.nextBtn }><Text style={{ color:COLORS.white }}>Sign in</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('register')}><Text style={{ fontSize:18,paddingTop:5,marginTop:25,alignSelf:"flex-end",textAlign:"right",marginHorizontal:20 }}>Not a member? Sign up</Text></TouchableOpacity>
        </View>
    )
}

export default Login;