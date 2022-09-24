const express= require("express");
const app= express();
const fs = require('fs')
const path = require('path');
const youtubedl = require('youtube-dl')
const request = require('request')
const port = process.env.PORT || 3000;

const download = (url, path, callback) => {
  const video = youtubedl(url)
  video.pipe(fs.createWriteStream(path)).on('close',callback)
  }
  

app.get('/download',(req, res) => {
    const url = req.query['url']
    const spath = './myvideo.mp4'
    download(url, spath, () => {
        console.log('✅ Downloaded on server machine!')
        let relativePath = './myvideo.mp4';
        filepath=path.resolve(relativePath);
        filename='ur_42'+Math.random()+'.mp4'
        res.download(filepath,filename,()=>{console.log('✅ Downloaded on client machine!')});
      })

})

app.listen(port);