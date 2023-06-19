import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity,Image } from "react-native";
import { Link, Stack,useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import styles from '../styles/home';

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
        <View style={styles.container}>
            <Image style={ styles.logo } source={ images.logo } />
            <Text style={ styles.titleLarge }>Forgot Password?</Text>
            <Text style={ styles.txtMedium }>No worries, we'll send you reset instructions.</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)} value={email} />
            <TouchableOpacity onPress={() => router.push('forgototp')} style={styles.nextBtn}><Text style={{ color:"#fff" }}>RESET PASSWORD</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('login')}><Text style={{ fontSize:18,paddingTop:5,marginTop:25,alignSelf:"flex-end",textAlign:"right",marginHorizontal:20 }}><Image style={{ flex: 1,width:30,height:30 }} resizeMode="contain" source={icons.left} /> Back to Sign In</Text></TouchableOpacity>
        </View>
    )
}

export default Forgot;