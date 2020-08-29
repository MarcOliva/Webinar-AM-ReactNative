import React, { Component } from 'react'
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'

export default class OptionFood extends Component {
    constructor() {
        super();
        this.state = { animation: new Animated.Value(1) };
    }

    startAnimation() {
        Animated.timing(this.state.animation, {
            toValue: this.props.values.scale,
            duration: 500,
            useNativeDriver: true
        }).start()
        this.props.selectedOption()
    }
    removeAnimation() {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    render() {
        const { values } = this.props;
        // if (values.selected == false) {
        //     this.removeAnimation()
        // }
        return (
            <Animated.View style={{ marginHorizontal: 20, transform: [{ scale: values.selected ? this.state.animation : 1 }] }}>
                <TouchableOpacity onPress={() => this.startAnimation()}>
                    <Text style={{
                        fontWeight: values.selected ? 'bold' : 'normal',
                        opacity: values.selected ? 1 : 0.5
                    }}>{values.text}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({})
