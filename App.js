import React,{useState} from "react";
import { Button,View,Text, SafeAreaView, FlatList, Switch } from "react-native";


const data=[
  {id:0,name:'Cafe A',isFavorite:true},
  {id:1,name:'Cafe B',isFavorite:false},
  {id:2,name:'Cafe C',isFavorite:true},
  {id:3,name:'Cafe D',isFavorite:false},
  {id:4,name:'Cafe E',isFavorite:true},
  {id:5,name:'Cafe F',isFavorite:false}
]

const App=()=>{

  const [counter,setCounter]=useState(0);

  function increaseCounter(){
    setCounter(counter+1);
  }
  function decreaseCounter(){
    setCounter(counter-1);
  }

  const [cafeList,setCafeList]=useState(data);
  const [showOnlyFavorites,setShowOnlyFavorites]=useState(false);

  function onFavoritesChange(isFavoriteSelected){
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected 
    ?setCafeList(cafeList.filter(cafe=>cafe.isFavorite))
    :setCafeList(data);
  }

  return(
      <SafeAreaView style={{flex:1}}>
        <View style={{backgroundColor:'aqua'}}>
          <Text style={{fontSize:40,fontWeight:'bold',textAlign:"center"}}>Counter:{counter}</Text>
          <Button title="Increase" onPress={increaseCounter}></Button>
          <Button title="Decrease" onPress={decreaseCounter}></Button>
        </View>
        <View style={{backgroundColor:'yellow',padding:30}}>
          <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange}/>
          <FlatList data={data} renderItem={(data)=><Text>{data.item.name}</Text>}/>
        </View>
      </SafeAreaView>
  )
}

export default App;