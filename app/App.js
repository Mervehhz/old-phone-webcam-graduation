import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import TopBar from './components/topbar'
import Login from './screens/login';
import Stream from './screens/stream';
import Viewer from './viewer';
import {useSelector} from 'react-redux';
import ModeSelect from './screens/modeselect';


const styles = StyleSheet.create({
  view: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
  },
});


export default function Main() {

  const userState = useSelector(state => state.user);
  const modeState = useSelector(state => state.mode);
  const [viewEnabled,setViewEnabled] = useState(false);
  console.log(userState);

    return (
        <View style={styles.view}>
          { userState.username ?  null : <Login/> }
          { (userState.username && modeState.mode == null) ? <ModeSelect/> : null }
          { (userState.username && modeState.mode == "STREAM") ? <TopBar/> : null }
          { (userState.username && modeState.mode == "VIEW") ? <Viewer/> : null }
        </View>
    );
}