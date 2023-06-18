import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";


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
            <Text style={{ fontSize: 28, fontWeight: "800" }}>Hello Again!</Text>
            <Text style={{ fontSize: 18, marginTop: 8 }}>Wellcome back you've</Text><Text style={{ fontSize: 18 }}> been missed!</Text>
            <TextInput style={{ width: '100%', height: 60, marginBottom: 12, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 10, backgroundColor: "#fff", borderRadius: 8, marginTop: 15 }} placeholder="Email" onChangeText={text => setEmail(text)} value={email} />
            <TextInput style={{ width: '100%', height: 60, marginBottom: 12, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 10, backgroundColor: "#fff", borderRadius: 8, marginTop: 15 }} placeholder="Password" onChangeText={text => setPassword(text)} value={password} secureTextEntry />
            <TouchableOpacity onPress={() => router.push('forgot')} style={{ alignItems: "flex-end", justifyContent: "flex-end" }}><Text style={{ fontSize:18,alignItems:"flex-end" }}>Recovery Password</Text></TouchableOpacity>
            <TouchableOpacity style={{ width: "100%", borderRadius: 8, height: 60, alignItems: "center",justifyContent: "center",marginTop: 40,backgroundColor: "#fa2562" }}><Text style={{ color:"#fff" }}>LOGIN</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('register')}><Text style={{ fontSize:18,paddingTop:5,marginTop:25,alignSelf:"flex-end",textAlign:"right",marginHorizontal:20 }}>Not a member? SignUp</Text></TouchableOpacity>
        </View>
    )
}

export default Login;