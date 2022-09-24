const express= require("express");
const app= express();
const fs = require('fs')
const youtubedl = require('youtube-dl')
const request = require('request')
const port = process.env.PORT || 3000;

const download = (url, path, callback) => {
  const video = youtubedl(url)
  video.pipe(fs.createWriteStream(path)).on('close',callback)
  }
  

app.get('/download',(req, res) => {
    const url = req.query['url']
    const path = './myvideo.mp4'
    download(url, path, () => {
        console.log('✅ Downloaded on server machine!')
        filepath='/Users/kousthubshetty/Downloads/programs/NodeJS/download-videos/myvideo.mp4';
        filename='ur_42'+Math.random()+'.mp4'
        res.download(filepath,filename,()=>{console.log('✅ Downloaded on client machine!')});
      })

})

app.listen(port);