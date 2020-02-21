import React from 'react'
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen(props){

    return (
<>
        <View style={{alignSelf:"stretch", height:90, backgroundColor:"#000000",padding:0,margin:0}}>
        <TouchableOpacity style={{margin:30}}  onPress={() => props.navigation.openDrawer()}>
           <Ionicons name="md-exit" size={32} color="white" />
         </TouchableOpacity> 
         </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: "#727571" }}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={{margin:30}}  onPress={() => props.navigation.openDrawer()}>
         <Text style={{color:"blue", textDecorationLine:"underline"}}>Open Menu</Text>
         </TouchableOpacity> 
      </View>
    </>
    )
  }
