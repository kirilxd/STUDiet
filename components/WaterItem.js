import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WaterItem({ id, name, selected, onSelect }) {
    return (
        <TouchableOpacity onPress={() => onSelect(id)}>
            <Image
                name={name}
                source={
                    selected
                        ? require('../assets/water_pressed.png')
                        : require('../assets/water.png')
                }
                style={{ width: 65, height: 65 }}
            />
        </TouchableOpacity>
    )
}
