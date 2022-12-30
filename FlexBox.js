import { View,Text, StyleSheet } from "react-native";
const FlexBox=()=>{
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor:'red',
                // width:100,
                // height:100,
                flex:3,
                justifyContent:'center',
                alignItems:'center',
        }}>
                <Text>1</Text>
            </View>
            <View style={{
                backgroundColor:'blue',
                // width:100,
                // height:100,
                flex:2,
                justifyContent:'center',
                alignItems:'center',
        }}>
                <Text>2</Text>
            </View>
            <View style={{
                backgroundColor:'yellow',
                // width:100,
                // height:100,
                flex:3,
                justifyContent:'center',
                alignItems:'center',
        }}>
                <Text>3</Text>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:50,
        height:300,
        
    }
})

export default FlexBox;