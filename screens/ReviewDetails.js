import React from 'react'
import { Stylesheet, View, Text } from 'react-native'

const ReviewDetails = () => {
    return (
        <View style={styles.container}>
            <Text>Review Details screen</Text>
        </View>
    );
}
 

const styles = Stylesheet.create({
    container: {
        padding: 24,
    }
})
export default ReviewDetails;