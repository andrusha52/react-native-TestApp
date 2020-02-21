import React ,{Component}from 'react'
import { View, Text,Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios"



export class MyCarousel extends Component {
    state={
        entries:[]
    }
    componentDidMount() {
        if(this.state.entries.length<1){
            this.dasfsfsdfdsfsd()}
    }
    
    dasfsfsdfdsfsd=()=>{
        axios.get(
            "https://pixabay.com/api/?q=" +
              "cats" +
              "&page=" +
              1 +
              "&key=" +
              "15153445-23879ff55371ef06c5f70070f" +
              "&image_type=photo&orientation=horizontal&per_page=12"
          ).then(res => this.setState({
              entries: [...res.data.hits]})).finally(res=>console.log(this.state.entries))
    }
    
  _renderItem = ({item}) => {
      return (
          <View style={{width:150,height: 200,backgroundColor:"#5c1515",alignItems: 'center',justifyContent: 'center'}} key={item.id}>
              <Image style={{width: 450, height: 300}} source={{uri: item.largeImageURL}} />
          </View>
      );
  }

  render () {
     
      return (
          <>
           <View style={{alignSelf:"stretch", height:90, backgroundColor:"#000000",padding:0,margin:0}}>
        <TouchableOpacity style={{margin:30}}  onPress={() => this.props.navigation.openDrawer()}>
           <Ionicons name="md-exit" size={32} color="white" />
         </TouchableOpacity> 
         </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: "#727571",padding:40,paddingTop:160, paddingLeft:100 }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            layout="stack"
            activeSlideAlignment="start"
            renderItem={this._renderItem}
            sliderWidth={400}
            itemWidth={400}
          />
          </View>
          </>
      );
  }
}