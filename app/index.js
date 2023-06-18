import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity,Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";


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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f5f5f5" }}>
            <Image style={{ width:90,height:90 }} source={ images.logo } />
            <Text style={{ fontSize: 28, fontWeight: "800",marginTop:15 }}>Hello Again!</Text>
            <Text style={{ fontSize: 18, marginTop: 8 }}>Wellcome back you've</Text><Text style={{ fontSize: 18 }}> been missed!</Text>
            <TouchableOpacity onPress={() => router.push('login')} style={{ width: "100%", borderRadius: 8, height: 60, alignItems: "center",justifyContent: "center",marginTop: 40,backgroundColor: "#fa2562" }}><Text style={{ color:"#fff" }}>LOGIN</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('register')} style={{ width: "100%", borderRadius: 8, height: 60, alignItems: "center",justifyContent: "center",marginTop: 40,backgroundColor: "#fa2562" }}><Text style={{ color:"#fff" }}>Register</Text></TouchableOpacity>
        </View>
    )
}

export default Home;