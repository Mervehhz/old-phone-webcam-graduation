import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class MyWebComponent extends Component {
    render() {
        return <WebView  javaScriptEnabled={true}
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        source={{ uri: 'http://192.168.43.120:8000/live/merve/index.m3u8' }} />;
    }
}

export default MyWebComponent;