/* eslint-disable no-unreachable */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Header = (props) => {
        return (
        <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
        viewStyle: {
                backgroundColor: '#F8F8F8',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                paddingTop: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 20 },
                shadowOpacity: 0.5,
                elevation: 5,
                position: 'relative'
        },
        textStyle: {
                fontSize: 20
        }
});

export { Header }