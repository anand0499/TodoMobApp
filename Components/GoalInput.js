import { View, TextInput, Button, StyleSheet, Alert, Modal,Image } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
    const [data, setData] = useState('');
    

    const onChangeTextHandle = (enteredData) => {
        setData(enteredData);
    }

    const onPressHandler = () => {
        if (data.length !== 0) {
            if (data.length >= 5) {
                props.onPressHandler(data);
                setData('')
            } else {
                Alert.alert("Invalid  data entered")
            }
        } else {
            Alert.alert("Please enter the data")
        }
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputConatiner}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput value={data} onChangeText={onChangeTextHandle} style={styles.textInput} placeholder='Enter your Goal!!' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                <Button title='Add Goal' onPress={onPressHandler} />
                    </View>
                    <View style={styles.button}>
                <Button title="Cancel" onPress={props.onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputConatiner: {
        flex: 1,
        flexDirection: 'column',  // by default property 
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#313b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        width: '80%',
        padding: 8,
    },
    buttonContainer:{
        marginTop:8,
        flexDirection:'row'
    },
    button:{
        width:100,
        marginHorizontal:8,

    },
    image:{
        width:100,
        height:100,
        padding:20
    }
})


export default GoalInput;