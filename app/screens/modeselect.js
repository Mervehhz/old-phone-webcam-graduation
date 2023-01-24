import {View, Text, TouchableOpacity} from "react-native"
import { useDispatch, useSelector} from "react-redux";
import Style from '../utils/style';
import axios from "axios"

const ModeSelect = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    return(
        <View style={{...Style.container, flex:1 }} >
            <Text style={{fontSize:18}}>
                Please select mode
            </Text>
            <TouchableOpacity style={user.is_streamer ? Style.buttonDisabled : Style.button} disabled={user.is_streamer} onPress={() => {
                axios.get("http://192.168.43.120:3000/api/set_streamer", {
                    headers: {
                        authorization: 'Bearer ' + user.token
                    }
                });
                dispatch({type: "MODE_SELECT", payload: "STREAM"})}}>
                <Text style={Style.text}>
                    Stream
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={user.is_streamer ? Style.button : Style.buttonDisabled} disabled={!user.is_streamer} onPress={() => dispatch({type: "MODE_SELECT", payload: "VIEW"})}>
                <Text style={Style.text}>
                    View
                </Text>
            </TouchableOpacity>           
        </View>
    )
}

export default ModeSelect;