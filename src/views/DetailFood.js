import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { images, constants } from '../utils'

export default class DetailFood extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#FFA451'}></StatusBar>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => this.props.navigation.pop()}>
                    <Image source={images.back} style={styles.back}></Image>
                    <Text style={{ fontSize: 18 }}>Go back</Text>
                </TouchableOpacity>
                <Image source={images.food} style={styles.food}>
                </Image>
                <View style={{
                    backgroundColor: 'white', flex: 1,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 20
                }}>
                    <Text style={styles.nameFood}>Quinoa Fruit Salad</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text>1</Text>
                            <TouchableOpacity>
                                <Text>+</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA451'
    },
    back: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    backButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 20,
        padding: 5,
        flexDirection: 'row',
        width: constants.WINDOW_WIDTH * 0.3,
        marginVertical: 15
    },
    food: {
        alignSelf: 'center',
        width: constants.WINDOW_WIDTH * 0.5,
        resizeMode: 'contain'
    },
    nameFood: {
        fontSize: 24
    }
})
