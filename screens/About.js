import React from 'react'
import { Stylesheet, View, Text } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text>About screen</Text>
        </View>
    );
}
 

const styles = Stylesheet.create({
    container: {
        padding: 24,
    }
})
export default About;