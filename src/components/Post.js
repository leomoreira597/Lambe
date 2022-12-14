import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import AddComment from "./AddComments";
import Author from "./Author";
import Comments from "./Comments";

class Post extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email={this.props.email} nickName={this.props.nickName} />
                <Comments comments={this.props.comments} />
                <AddComment />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: "contain"
    }
})

export default Post