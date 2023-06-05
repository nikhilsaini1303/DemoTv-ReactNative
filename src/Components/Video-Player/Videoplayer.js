import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';

const Videoplayer = () => {
    return (
        <View>
            <VideoPlayer 
                video={require('../../assests/dummyVideo.mp4')}
                autoplay={true}
                // showDuration={true}
                controlsTimeout={0}
            />
        </View>
    );
};

export default Videoplayer;

const styles = StyleSheet.create({});