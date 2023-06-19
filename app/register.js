import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity,Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import styles from '../styles/home';

const Register = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const handleRegister = () => {
        // Perform login logic here
        console.log('name:', name);
        console.log('Password:', password);
        console.log('email:', email);
    };
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f5f5f5" }}>
            <Image style={ styles.logo } source={ images.logo } />
            <Text style={ styles.titleLarge }>Create New Account.</Text>
            <TextInput style={styles.input} placeholder="Name" onChangeText={text => setName(text)} value={name} />
            <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)} value={email} />
            <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} value={password} secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={text => setConfirmPassword(text)} value={confirm_password} secureTextEntry />
            <TouchableOpacity style={ styles.nextBtn }><Text style={{ color:"#fff" }}>Sign up</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('login')}><Text style={{ fontSize:18,paddingTop:5,marginTop:25,alignSelf:"flex-end",textAlign:"right",marginHorizontal:20 }}>Sign in</Text></TouchableOpacity>
        </View>
    )
}

export default Register;