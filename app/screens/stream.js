import React from 'react';
import { StyleSheet, View, Dimensions, PermissionsAndroid } from 'react-native';
import {NodeCameraView} from 'react-native-nodemediaclient';
import axios from "axios"

const styles = StyleSheet.create({
    view: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        position: 'relative',
    },
});


class Stream extends React.Component {
    vb = null;

    state = {
        isStreaming: true,
    };

    videoSettings = {
        preset: 12,
        bitrate: 400000,
        profile: 1,
        fps: 15,
        videoFrontMirror: false,
    };

    cameraSettings = {cameraId:0, cameraFrontMirror: false};

    audioSettings = {bitrate: 32000, profile: 1, samplerate: 44100};

    channel = 'merve';

    get height() {
        return Dimensions.get('window').height;
    }

    get width() {
        return Dimensions.get('window').width;
    }

    toggleStream = async () => {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

        if (this.state.isStreaming) {
        this.vb.stop();
        } else {
        this.vb.start();
        }
        this.setState({
        isStreaming: !this.state.isStreaming,
        });
    };

    componentDidMount = () => {
        this.vb.start();
    }


    render() {
        return (
            <View style={styles.view}>
            <View>
                <NodeCameraView
                style={{
                    height: this.height,
                    width: this.width,
                    zIndex: 1,
                    backgroundColor: '#000000',
                }}
                ref={vb => {
                    this.vb = vb;
                }}
                outputUrl={`rtmp://192.168.43.120/live/${this.channel}`}
                camera={this.cameraSettings}
                // audio={this.audioSettings}
                video={this.videoSettings}
                autopreview={true}></NodeCameraView>
            </View>
            </View>
        );
    }
}

export default Stream