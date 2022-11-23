import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

class Feed extends React.Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickName: "Leonardo Moreira da Silva",
                email: "leobonitao@gmail.com",
                image: require('../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickName: "Pessoa legal",
                        comment: "Foto muito foda"
                    },
                    {
                        nickName: "Chato",
                        comment: "foto lixo"
                    },
                    {
                        nickName: "Amigo que defende você",
                        comment: "Chato, faz melhor então"
                    }
                ]
            },
            {
                id: Math.random(),
                nickName: "Ana Julia ",
                email: "anajulia@oanajulia.com",
                image: require('../assets/imgs/fence.jpg'),
                comments: [
                        {
                            nickName: "Pessoa legal",
                            comment: "Foto muito foda"
                        },
                        {
                            nickName: "Chato",
                            comment: "foto lixo"
                        },
                        {
                            nickName: "Amigo que defende você",
                            comment: "Chato, faz melhor então"
                        }
                ]
            },
            {
                id: Math.random(),
                nickName: "Quero minha picanha que prometeram",
                email: "amorporpicanha@gmail.com",
                image: require('../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickName: "Pessoa legal",
                        comment: "Foto muito foda"
                    },
                    {
                        nickName: "Chato",
                        comment: "foto lixo"
                    },
                    {
                        nickName: "Amigo que defende você",
                        comment: "Chato, faz melhor então"
                    }
                ]
            }
        ]
    }

    render(){
        return(
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />} />

            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
})

export default Feed