import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export default function SummaryComponent() {
    const [kcalLeft, setKcalLeft] = useState(2500)
    const [eaten, setEaten] = useState(0)
    const [burned, setBurned] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Summary</Text>
            <View style={styles.kcal}>
                <Text style={styles.kcalSide}>Eaten: {eaten}</Text>
                <Text style={styles.kcalHeader}>
                    Kcal left <Text style={styles.kcalCount}>{kcalLeft}</Text>
                </Text>
                <Text style={styles.kcalSide}>Burned: {burned}</Text>
            </View>
            <View style={styles.nutrients}>
                <Text style={styles.nutrientsText}>Carbs</Text>
                <Text style={styles.nutrientsText}>Protein</Text>
                <Text style={styles.nutrientsText}>Fat</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff5d52',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    header: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
    },
    kcal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 40,
    },
    kcalHeader: {
        flex: 1,
        marginHorizontal: 25,
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
    },
    kcalCount: {
        fontWeight: '600',
    },
    kcalSide: {
        color: '#fff',
        marginHorizontal: 10,
    },
    nutrients: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nutrientsText: {
        color: '#fff',
        marginHorizontal: 50,
        fontSize: 15,
        marginVertical: 15,
    },
})
