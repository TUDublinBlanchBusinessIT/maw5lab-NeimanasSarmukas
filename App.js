import { StyleSheet, View, Image, Dimensions, Switch } from 'react-native';
import Swiper from 'react-native-swiper';
import MovieBooking from './components/MovieBooking';
import PersonalInfo from './components/PersonalInfo';

import {useState} from 'react';


export default function App() {
  
  const[balcony, setbalcony] = useState(fasle)

  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}><Image source={require('./assets/gladiator.jpg')}/></View>
      <Swiper showsButtons={true}>
          <PersonalInfo screenstyle={styles.screen}/>
          <MovieBooking screenstyle={styles.screen}/>
      </Swiper>
    </View>
  )
}
var width = Dimensions.get('window');
const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: .5,
    marginTop: "8%"
  }, 
  screencontainer: {
    flexDirection:"column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"
  }

});
