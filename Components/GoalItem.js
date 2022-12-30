import { StyleSheet, View, Text, Pressable } from "react-native";


const GoalItem = (props) => {
    return (

        <View key={props.goals.id} style={styles.goalItems}>
            <Pressable 
                android_ripple={{ color: 'yellow' }} 
                onPress={() => props.onDelete(props.id)}
                style={({pressed})=>pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemsTextColor}>{props.goals.item.text}</Text>
            </Pressable>
        </View >

    )
}

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalItemsTextColor: {
        color: 'white',
        padding: 12,
    },
    pressedItem:{
        opacity:0.5,
    }
})

export default GoalItem;