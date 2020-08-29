import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Image, Animated, TouchableOpacity, FlatList } from 'react-native'
import { constants, images } from '../utils'
import { Easing } from 'react-native-reanimated'
import PlusButton from '../components/PlusButton'
import OptionFood from '../components/OptionFood'
import SplashScreen from 'react-native-splash-screen'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lista: [
                {
                    id: 1,
                    favourite: false,
                    image: images.food,
                    price: 8000,
                    name: "Honey lime combo",
                    color: '#FFFAEB'
                },
                {
                    id: 2,
                    favourite: false,
                    image: images.food,
                    price: 8000,
                    name: "Honey lime combo",
                    color: '#FEF0F0'

                },
                {
                    id: 3,
                    favourite: false,
                    image: images.food,
                    price: 8000,
                    name: "Honey lime combo",
                    color: '#F1EFF6'
                }, {
                    id: 4,
                    favourite: false,
                    image: images.food,
                    price: 8000,
                    name: "Honey lime combo",
                    color: 'white'
                }
            ],
            optionsFood: [
                {
                    text: "Hottest",
                    selected: true,
                    scale: 1
                },
                {
                    text: "Popular",
                    selected: false,
                    scale: 1

                },
                {
                    text: "New combo",
                    selected: false,
                    scale: 1

                },
                {
                    text: "Top",
                    selected: false,
                    scale: 1

                },
            ]
        }
        this.opacity = new Animated.Value(0)
        this.translateX = new Animated.Value(0)
        this.sizeText = new Animated.Value(1)
    }

    componentDidMount() {

        SplashScreen.hide()
        this.animacionListas()
    }
    componenteFood = (item, backColor = false) => {
        return <View style={[styles.foodItem, { backgroundColor: backColor ? item.color : 'white' }]}>
            <Image source={images.heart} style={{
                width: 20, height: 20, resizeMode: 'contain',
                alignSelf: 'flex-end'
            }}></Image>
            <Image source={images.food} style={{ width: 80, height: 80, resizeMode: 'contain' }}></Image>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                marginVertical: 10
            }}>
                <Text style={{ flex: 1 }}>$ 2000</Text>
                <PlusButton onPress={() => this.props.navigation.navigate("DetailFood")}></PlusButton>
            </View>
        </View>


    }
    animacionListas = () => {
        Animated.parallel([
            Animated.timing(this.opacity, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(this.translateX, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ]).start()
    }
    selectOptionFood = (item) => {
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#E5E5E5' barStyle='dark-content'></StatusBar>
                <Text style={styles.welcomeText}>
                    Hello Tony, What fruit salad combo do you want today?
                    </Text>
                <View>
                    {/**Integrar searchbar */}
                    <Animated.Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 15,
                        opacity: this.opacity
                    }}>Recommended Combo</Animated.Text>
                    <Animated.FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={{
                            opacity: this.opacity,
                            transform: [{
                                translateX: this.translateX.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [constants.WINDOW_WIDTH, 0]
                                }),

                            }],

                        }}
                        data={this.state.lista}
                        renderItem={({ item }) => this.componenteFood(item)}
                        keyExtractor={({ item, index }) => index}
                    />

                    <Animated.FlatList
                        horizontal
                        data={this.state.optionsFood}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            marginTop: constants.WINDOW_HEIGHT * 0.07,
                            marginBottom: 20
                        }}
                        style={{
                            opacity: this.opacity
                        }}
                        renderItem={({ item }) => <Animated.View style={{
                            marginHorizontal: 20,

                        }}>
                            <TouchableOpacity onPress={() => this.selectOptionFood(item)}>
                                <Text style={{
                                    fontWeight: item.selected ? 'bold' : 'normal',
                                    opacity: item.selected ? 1 : 0.5
                                }}>{item.text}</Text>
                            </TouchableOpacity>
                        </Animated.View>}
                    />
                    <Animated.FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{
                            opacity: this.opacity,
                            transform: [{
                                translateX: this.translateX.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [constants.WINDOW_WIDTH, 0]
                                })
                            }],

                        }}
                        data={this.state.lista}
                        renderItem={({ item }) => this.componenteFood(item, true)}
                        keyExtractor={({ item, index }) => index}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        padding: 20
    },
    welcomeText: {
        marginTop: constants.WINDOW_HEIGHT * 0.05,
        width: constants.WINDOW_WIDTH * 0.7,
        fontSize: 18,
    },
    foodItem: {
        backgroundColor: 'white',
        elevation: 2,
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
    }
})
