// import FlexBox from "./FlexBox"
// import { View } from "react-native"

// export default function App (){
//   return (
//     <View>
//       <FlexBox />
//     </View>
//   )
// }






import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [dataList,setDataList]=useState([]);
  const [showModel,setShowModel]=useState(false);

  const onPressGoalHandler=(data)=>{
    setDataList((prevstate)=>{
      return [...prevstate,{text:data,id:Math.random.toString()}];
    })
    endAddGoalHandler();
  }

  const startAddGoalHandler=()=>{
    setShowModel(true);
  }

  const endAddGoalHandler=()=>{
    setShowModel(false);
  }

  const deleteGoalHandler=(id)=>{
    setDataList((prevstate)=>{
      return prevstate.filter((goals)=>{
        return (
          goals.id!==id
        )
      })
    })
  }

  return (
    <>
    <StatusBar style='light' />
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.appContainer}>
        <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      { showModel &&   <GoalInput visible={showModel} onPressHandler={onPressGoalHandler} onClose={endAddGoalHandler} />  }
        <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {dataList.length===0 && (
            <Text> No Goals </Text>
          )}
           {dataList.map((dt,i)=>{
              return (
                <View style={styles.goalItems} key={i}>
                  <Text  style={styles.goalItemsTextColor}>{dt}</Text>
                  </View>
              ) 
            })}
        </ScrollView> */}
         <FlatList data={dataList} renderItem={(goals)=>{
          return ( <GoalItem goals={goals} onDelete={deleteGoalHandler} id={goals.item.id} /> )
            }} />
        </View>
      </KeyboardAvoidingView >
      </>
  );
}

const styles = StyleSheet.create({
    appContainer:{
      flex:1,
      paddingTop:50,
      paddingHorizontal:16,
      backgroundColor:'#1e085a'
    },
    goalsContainer:{
      flex:5,
    }
});
