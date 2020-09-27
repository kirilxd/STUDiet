import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import SummaryComponent from '../components/SummaryComponent'
import { ScrollView } from 'react-native-gesture-handler'
import WaterComponent from '../components/WaterComponent'
import FoodComponent from '../components/FoodComponent'
import SafeAreaView from 'react-native-safe-area-view'

export default function DiaryScreen(props) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={{
                        margin: 10,
                    }}
                >
                    <SummaryComponent />
                    <FoodComponent navigation={props.navigation} />
                    <WaterComponent />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
