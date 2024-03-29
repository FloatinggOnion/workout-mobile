import { Link } from 'expo-router'
import { Text, View, StyleSheet, ImageBackground, TextInput } from 'react-native'
import React, { Component, useState } from 'react'
import bg from '../../assets/auth-bg.jpg';
import Button from '../components/Button';
import tw from 'twrnc';

const image = { uri: "@assets/auth-bg.jpg" };

const login = () => {

  const [username, setUsername] = useState('Username');
  const [password, setPassword] = useState('Password');
    
  return (
    <View style={tw`flex-1 justify-center p-0 items-center w-full h-full`}>
      <ImageBackground source={bg} style={tw`w-full h-full flex-col justify-center gap-4 items-center`}>
          <Text style={tw`text-4xl text-white font-extrabold mx-auto p-4 mb-4`}>Login</Text>

          <TextInput style={tw`w-[90] border-slate-700 rounded-3 bg-slate-700 bg-opacity-40 border-4 text-white my-4 p-4`} value={username} onChangeText={setUsername} />

          <TextInput style={tw`w-[90] border-slate-700 rounded-3 bg-slate-700 bg-opacity-40 border-4 text-white my-4 p-4`} value={password} onChangeText={setPassword} />

          <Link href={'/'} asChild>
            <Button>
              LOGIN
            </Button>
          </Link>
      </ImageBackground>
    </View>                                      
  )
}

export default login;