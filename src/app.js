/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unreachable */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
    state = { loggedIn: null }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDlSIWAhcnNXupmyPHYGpcUkNNgRUdRJJE',
            authDomain: 'authentication-8fd12.firebaseapp.com',
            databaseURL: 'https://authentication-8fd12.firebaseio.com',
            projectId: 'authentication-8fd12',
            storageBucket: 'authentication-8fd12.appspot.com',
            messagingSenderId: '1053231041610',
            appId: '1:1053231041610:web:d7c112b6c193bc5079aab3',
            measurementId: 'G-MFJLTG7SRN'
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return ( 
                    <CardSection>
                    <Button onPress={()=>{console.log("Log Out!");firebase.auth().signOut();}}>
                    Log Out</Button>
                    </CardSection>
                )
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App