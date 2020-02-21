import React,{Component} from 'react'
import { View, Text ,TextInput,ScrollView} from 'react-native';
import {Keyboard} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';
import { Ionicons } from '@expo/vector-icons';



  const uuidv1 = require('uuid/v1');



export class ToDoList extends Component {
  state = { 
    inputValue:"",
    todoList:[{
      value:43243242,
      id:432423
    },
    {
      value:"fsdfsdfsdf",
      id:4324423
    }],
   }
  
   SubmitAdd(){
    if(this.state.inputValue.length>0){
     this.setState(prevState=>({
    todoList: [...prevState.todoList,...[{value:this.state.inputValue,id:uuidv1()}]],
      inputValue:"",
         }))
   }}
   onChangeInput(value){
    this.setState({inputValue:value})
   }
   DeleteItem(id){
    this.setState({
      todoList: [...this.state.todoList.filter(el=> el.id!== id)],
           })
     }
   

  render() {
    return (
      <>
      <View style={{alignSelf:"stretch", height:90, backgroundColor:"#000000",padding:0,margin:0}}>
   <TouchableOpacity style={{margin:30}}  onPress={() => this.props.navigation.openDrawer()}>
      <Ionicons name="md-exit" size={32} color="white" />
    </TouchableOpacity> 
    </View>
    <ScrollView style={{alignSelf:"stretch"}}>
      <View style={{ flex: 1,paddingTop: 80, alignItems:"center" ,backgroundColor: "#727571" ,alignSelf:"stretch" , minHeight:580}}>
        <Text>Create Your TODO list</Text>
        <View style={{borderColor: "#07fc03",alignSelf:"stretch" , alignItems:"center", paddingTop:20}}>
          <TextInput onChange={(e)=>{this.onChangeInput(e.nativeEvent.text)}}  value={this.state.inputValue} placeholder="add you item"  style={{backgroundColor:"#ffffff", width:200, height:50, paddingLeft:20,borderRadius: 20}}/>
          <TouchableOpacity  onPress={() => {Keyboard.dismiss(),this.SubmitAdd();}} style={{backgroundColor:"#ffffff", width:100, height:50, borderRadius:20, marginTop: 10,alignItems:"center",justifyContent: 'center'}}>
            <Text > Add</Text>
            </TouchableOpacity> 

        </View>

        <View style={{flex:5, alignSelf:"stretch",flexDirection:"row",flexWrap:"wrap",margin:20, alignContent:"flex-start"}}>
       
        <FlatGrid
  itemDimension={130}
  items={this.state.todoList}
  renderItem={({ item }) => (  <View key={item.id} style={{backgroundColor:"#dbd5d5",width:100,margin:10}}>
  <Text style={{width:100, height:50}}>{item.value}</Text>
  <TouchableOpacity id={item.id} onPress={()=>{this.DeleteItem(item.id)}} style={{width:50,height:20,backgroundColor:"#f7021f",}}><Text>delete</Text></TouchableOpacity>
  </View>)}
/>
        </View>
      </View>
      </ScrollView>
      </>
    )
  }
}

export default ToDoList;
  