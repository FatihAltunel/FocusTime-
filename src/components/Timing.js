import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "./RoundedButton";
import { spacing } from "../utils/sizes";

export const Timing = ({onChangeTime}) => {

    return(
        <>
        <View style={style.timingButton}>
            <RoundedButton size={75} title='10' onPress={()=>{onChangeTime(10)}} />
        </View>
        <View style={style.timingButton}>
            <RoundedButton size={75} title='15' onPress={()=>{onChangeTime(15)}} />
        </View>
        <View style={style.timingButton}>
            <RoundedButton size={75} title='20' onPress={()=>{onChangeTime(20)}} />
        </View>
        </>
    )

}

const style = StyleSheet.create({
    timingButton:{
        alignItems:'center',
        margin:spacing.md
    }
})