import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import {HomeScreen} from "./components/Homescreen";
import {MyCarousel} from "./components/MyCarousel";
import {ToDoList} from "./components/ToDoList";
import {Basic} from "./components/SortList";
import {Grid} from "./components/Grid";




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerStyle={{
      backgroundColor: '#c6cbef',
      width: 240,
    }} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ToDO-list" component={ToDoList} />
      <Drawer.Screen name="Slider" component={MyCarousel} />
      <Drawer.Screen name="Sort" component={Basic} />
      <Drawer.Screen name="Grid" component={Grid} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}






// export class App extends Component {
//   state = {
//      menuOpen:false
//     }

//   handleMenu() {
//     const {menuOpen} = this.state
//     this.setState({
//       menuOpen: !menuOpen
//     })
//   }
  
//   render() {
//     return (

//       <View style={{flex: 1}}>
//       <OffCanvas3D
//       active={this.state.menuOpen}
//       onMenuPress={this.handleMenu.bind(this)}
//       backgroundColor={'#222222'}
//       menuTextStyles={{color: 'white'}}
//       handleBackPress={true}
//       menuItems={[
//         {
//           title: 'Home',
//           icon: <Icon name="camera" size={35} color='#ffffff' />,
//           renderScene: <HomeScreen/>
//         },
//         {
//           title: 'ToDO-list',
//           icon: <Icon name="bell" size={35} color='#ffffff' />,
//           renderScene: <ToDoList/>
//         },
//         {
//           title: 'Contacts',
//           icon: <Icon name="bell" size={35} color='#ffffff' />,
//           renderScene: <MyCarousel/>
//         },
//         {
//           title: 'Sort',
//           icon: <Icon name="bell" size={35} color='#ffffff' />,
//           renderScene: <Basic/>
//         },
//         {
//           title: 'Grid',
//           icon: <Icon name="bell" size={35} color='#ffffff' />,
//           renderScene: <Grid/>
//         }
//       ]}/>
//     </View>

//     )
//   }
// }
