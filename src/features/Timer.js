import React from "react";
import {useKeepAwake} from "expo-keep-awake"
import { View, StyleSheet, Text, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "../components/Timing";
import { useState } from "react";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

    const ONE_SECOND_IN_MS = 1000;
  
    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
    ];

    
    export const Timer = ({focusInput, clearInput, onTimerEnd}) => {
        useKeepAwake();
        const [isStarted, setIsStarted] = useState(false);
        const [progress, setProgress] = useState(1);
        const [visible, isVisible] = useState(false);
        const [minutes, setMinutes] = useState(0.1);
        
        const onEnd=(reset)=>{
            Vibration.vibrate(PATTERN);
            setProgress(1);
            setIsStarted(false);
            reset();
            onTimerEnd(focusInput);
        }

    return (
        <View style = {style.container}>
        <View style={style.countDown}>  
            <Countdown
            minutes={minutes}
            isPaused = {!isStarted}
            onProgress={setProgress}
            onEnd={onEnd}
            />
            <View style={{paddingTop:spacing.md}}>
                <Text style = {style.title}>Focusing on</Text>
                <Text style = {style.task}>{focusInput}</Text>
            </View>
        </View>
        <View>
            <ProgressBar
            progress={progress}
            color={colors.progressBar} 
            style={{height: spacing.sm}} 
            visible={visible}
            />
        </View>
        <View style={style.timingWrapper}>
            <Timing onChangeTime = {setMinutes} />
        </View>
        <View style={style.buttonWrapper}>
            {!isStarted && (
                <RoundedButton 
                title='START'
                onPress={() => {setIsStarted(true), isVisible(true)}}
                /> )
            }
            {isStarted && (
                <RoundedButton 
                title='PAUSE'
                onPress={() => {setIsStarted(false)}}
                /> )
            }
        </View>
        <View style={style.clearSubjectWrapper}>
            <RoundedButton size={75} title='Back' onPress={()=>{clearInput()}} />
        </View>
    </View>
);
};

const style = StyleSheet.create({
    container: {
        flex:1,
    },
    countDown:{
        flex:0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper:{
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timingWrapper:{
        flex:0.2,
        flexDirection:'row',
        paddingTop:spacing.sm,
        alignItems:'center',
        justifyContent:'center',
    },
    clearSubjectWrapper:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'center',

    },  
    title:{
        color: colors.white,
        fontWeight:'bold',
        textAlign:'center',
        fontSize: fontSizes.md,
    },
    task:{
        color: colors.white,
        textAlign:'center',
        fontSize: fontSizes.lg,
    }
})