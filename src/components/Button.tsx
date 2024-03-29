import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc';

interface Props {
    onPress?: () => void;
    children: string;
}


const Button = React.forwardRef(({children, onPress}: Props, ref) => {
  return (
    <Pressable style={tw`items-center justify-center py-4 bg-slate-700 rounded-3 w-[90]`} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
});

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});


export default Button;