import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button,TouchableOpacity } from "react-native";
import { Link, Stack,useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";


const Forgototp = () => {
    const router = useRouter();
    const [otp, setOTP] = useState('');
    const handleLogin = () => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f5f5f5" }}>
            <View style={{ alignContent:"flex-start",alignSelf:"flex-start",alignItems: "flex-start", justifyContent: "flex-start" }}><Text style={{ fontSize: 28, fontWeight: "800" }}>Verify Your Email</Text></View>
            <Text style={{ alignContent:"flex-start",alignSelf:"flex-start",fontSize: 18, marginTop: 15 }}>Please enter the 4 digit code sent to verify.</Text>
            <TextInput style={{ width: '100%', height: 60, marginBottom: 12,marginTop: 15, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 10, backgroundColor: "#fff", borderRadius: 8, marginTop: 15 }} placeholder="OTP" onChangeText={text => setOTP(text)} value={otp} />
            <TouchableOpacity onPress={() => router.push('reset')} style={{ width: "100%", borderRadius: 8, height: 60, alignItems: "center",justifyContent: "center",marginTop: 40,backgroundColor: "#fa2562" }}><Text style={{ color:"#fff" }}>VERIFY</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('reset')}><Text style={{ fontSize:18,paddingTop:5,marginTop:25,alignSelf:"flex-end",textAlign:"right",marginHorizontal:20 }}>Resend Code</Text></TouchableOpacity>
        </View>
    )
}

export default Forgototp;