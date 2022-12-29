import React,{useState} from "react";
import { Button,View,Text, SafeAreaView } from "react-native";

const App=()=>{

  const [counter,setCounter]=useState(0);

  function increaseCounter(){
    setCounter(counter+1);
  }
  function decreaseCounter(){
    setCounter(counter-1);
  }
  return(
      <SafeAreaView style={{flex:1}}>
        <View style={{justifyContent:'center',flex:1}}>
          <Text style={{fontSize:40,fontWeight:'bold',textAlign:"center"}}>Counter:{counter}</Text>
          <Button title="Increase" onPress={increaseCounter}></Button>
          <Button title="Decrease" onPress={decreaseCounter}></Button>
        </View>
      </SafeAreaView>
  )
}

export default App;