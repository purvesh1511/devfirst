import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button,TouchableOpacity } from "react-native";
import { Link, Stack,useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";


const Forgot = () => {
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
            <View style={{ alignContent:"flex-start",alignSelf:"flex-start",alignItems: "flex-start", justifyContent: "flex-start" }}><Text style={{ fontSize: 28, fontWeight: "800" }}>Forgot Password?</Text></View>
            <Text style={{ alignContent:"flex-start",alignSelf:"flex-start",fontSize: 18, marginTop: 15 }}>No worries, we'll send you reset instructions.</Text>
            <TextInput style={{ width: '100%', height: 60, marginBottom: 12,marginTop: 15, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 10, backgroundColor: "#fff", borderRadius: 8, marginTop: 15 }} placeholder="Email" onChangeText={text => setEmail(text)} value={email} />
            <TouchableOpacity onPress={() => router.push('forgototp')} style={{ width: "100%", borderRadius: 8, height: 60, alignItems: "center",justifyContent: "center",marginTop: 40,backgroundColor: "#fa2562" }}><Text style={{ color:"#fff" }}>RESET PASSWORD</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('login')}><Text style={{ fontSize:18,paddingTop:5,marginTop:25,alignSelf:"flex-end",textAlign:"right",marginHorizontal:20 }}><Image style={{ flex: 1,width:30,height:30 }} resizeMode="contain" source={icons.left} /> Back to Sign In</Text></TouchableOpacity>
        </View>
    )
}

export default Forgot;