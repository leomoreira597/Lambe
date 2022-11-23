import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gravatar } from "react-native-gravatar";

export default function Author(props){
    return(
        <View style={styles.container}>
            <Gravatar options={{ email: props.email, secure: true }}
                style={styles.avatar} />
            <Text style={styles.nickName}>{props.nickName}</Text>    
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickName: {
        color: "#444",
        marginVertical: 10,
        fontSize: 15,
        fontWeight: "bold"
    }

})