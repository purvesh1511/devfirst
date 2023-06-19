import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button,TouchableOpacity } from "react-native";
import { Link, Stack,useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import styles from '../styles/home';

const Forgototp = () => {
    const router = useRouter();
    const [otp, setOTP] = useState('');
    const handleLogin = () => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <View style={styles.container}>
            <Image style={ styles.logo } source={ images.logo } />
            <Text style={ styles.titleLarge }>Verify Your Email</Text>
            <Text style={styles.titlemediam}>Please enter the 4 digit code sent to verify.</Text>
            <TextInput style={styles.input} placeholder="OTP" onChangeText={text => setOTP(text)} value={otp} />
            <TouchableOpacity onPress={() => router.push('reset')} style={styles.nextBtn}><Text style={{ color:"#fff" }}>VERIFY</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('reset')}><Text style={{ fontSize:18,paddingTop:5,marginTop:25,alignSelf:"flex-end",textAlign:"right",marginHorizontal:20 }}>Resend Code</Text></TouchableOpacity>
        </View>
    )
}

export default Forgototp;