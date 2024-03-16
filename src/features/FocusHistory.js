import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { fontSizes } from "../utils/sizes";


export const FocusHistory =({focusHistory})=>{

    if(!focusHistory || !focusHistory.length) 
    {return <Text style={styles.title}>We haven't focused on anything yet!</Text>;}

    else{
        const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Things we focused on:</Text>
                <FlatList
                data={focusHistory}
                renderItem={renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:spacing.md,
        flex:1,
    },
    item:{
        fontSize:fontSizes.md,
        color:colors.white,
        paddingTop:spacing.sm
    },
    title:{
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight:'bold',
    }
})