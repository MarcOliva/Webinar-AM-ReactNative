import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { images } from '../utils'
export default function PlusButton({ onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress()} style={{
            width: 25, height: 25, borderRadius: 25,
            backgroundColor: '#FFF2E7',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image source={images.plus} style={styles.icon}></Image>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    }
})