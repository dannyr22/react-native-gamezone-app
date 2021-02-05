import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {globalStyles } from '../styles/global'

const ReviewDetails = ({ navigation, route }) => {
    const {title, body, rating} = route.params
    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    );
}
 

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})
export default ReviewDetails;