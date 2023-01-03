const NodeMediaServer = require('node-media-server')
const express = require('express')

var server = express();

server.use(express.static(__dirname + '/public'));

server.listen(3000);

const config = {
    rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
    },
    http: {
    port: 8000,
    allow_origin: '*',
    mediaroot: "./media",
    },
    trans: {
        ffmpeg: '/snap/bin/ffmpeg',
        tasks: [
            {
                app: 'live',
                ac: 'aac',
                vc: 'libx264',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                dash: true,
                dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
            }
        ]
    }
    }
    
var nms = new NodeMediaServer(config)
nms.run()