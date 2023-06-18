import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button,TouchableOpacity } from "react-native";
import { Link, Stack,useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";


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
            <View style={{ alignContent:"flex-start",alignSelf:"flex-start",alignItems: "flex-start", justifyContent: "flex-start" }}><Text style={{ fontSize: 28, fontWeight: "800" }}>Reset Password?</Text></View>
            <Text style={{ alignContent:"flex-start",alignSelf:"flex-start",fontSize: 18, marginTop: 15 }}>Your New Password must be diffrent from Privious used password.</Text>
            <TextInput style={{ width: '100%', height: 60, marginBottom: 12,marginTop: 15, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 10, backgroundColor: "#fff", borderRadius: 8, marginTop: 15 }} placeholder="Password" onChangeText={text => setPassword(text)} value={password} />
            <TextInput style={{ width: '100%', height: 60, marginBottom: 12,marginTop: 15, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 10, backgroundColor: "#fff", borderRadius: 8, marginTop: 15 }} placeholder="Confirm Password" onChangeText={text => setConfirmPassword(text)} value={confirm_password} />
            <TouchableOpacity style={{ width: "100%", borderRadius: 8, height: 60, alignItems: "center",justifyContent: "center",marginTop: 40,backgroundColor: "#fa2562" }}><Text style={{ color:"#fff" }}>RESET PASSWORD</Text></TouchableOpacity>
        </View>
    )
}

export default Reset;