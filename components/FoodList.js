import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    SafeAreaView
} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';
import {addFood, getFoods} from './api/FoodsApi';

class FoodList extends Component {

    colors = [
        'red', 'black', 'blue', 'green', 'orange', 'yellow','purple', 'white','brow'
    ]

    state = {
        FoodList: [],
        currentFoodItem: null,
    }

    onFoodAdded = (food) => {
        console.log("Food Added");
        console.log(food);
    }

    onFoodReceived = (foodList) => {
        console.log(foodList);
        this.setState(prevState => ({
            foodList: prevState.foodList = foodList
        }));
    }

    componentDidMount() {
        getFoods(this.onFoodReceived);
    }

    render() {
        return (
            <SafeAreaView>
                <View style={Styles.row}>
                    <TextInput
                    style = {styles.unput}
                    placeholder = "Add Food"
                    value = {this.state.currentFoodItem}
                    onChangeText = {(text) => this.setState(prevState => ({
                        currentFoodItem: prevState.currentFoodItem = text
                    }))
                    }/>

                    <Button
                    title = 'Submit'
                    style = {styles.Button}
                    onPress = {() => 
                        addFood({
                            name: this.state.currentFoodItem,
                            color: this.colors[Math.floar(Math.random() * this.colors.length)]
                        },
                        this.onFoodAdded)
                    }
                    />
                </View>
                <FlatList
                data = {this.state.foodList}
                ItemSeparatorComponent = {() => <Divider style = {{backgroundColor: 'black'}}/>}
                keyExtractor = {(item, index) => index.toString()}
                renderItem = {({item}) => {
                    console.log(item);
                    return (
                        <ListItem
                        title = {item.name}
                        subtitle = {item.color}
                        onPress = {() => { }}
                        />
                    );
                }
                }
                />
                    
            </SafeAreaView>
        )
    };
}