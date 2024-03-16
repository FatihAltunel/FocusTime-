import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {colors} from '../utils/colors';
import { fontSize, spacing } from '../utils/sizes';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({addInput}) => {
        const [input, setInput] = useState(null);
    return (   
        <View>
            <View style={style.inputContainer}>
                <TextInput 
                    onChangeText={setInput}
                    style={style.textInput}
                    label="What whould you like to focus on?"/>
                <View style={style.button}>
                    <RoundedButton 
                        title="+"
                        size={50}
                        onPress = {()=> addInput(input)}
                    />
                </View>
            </View>
        </View>
)}
    
const style = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: "top",
        padding: spacing.sm,
    },
    text:{
        color: colors.text,
    },
    textInput:{
        flex:1,
        marginRight:spacing.sm,
        fontSize: 14,
        fontWeight: "bold",
    },
    button:{
        justifyContent: 'center',
    }

})