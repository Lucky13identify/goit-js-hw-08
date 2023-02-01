!function(){var e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((function(){t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)})).catch((function(e){}))}),1e3)),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"))}();
//# sourceMappingURL=02-video.6af2c0f1.js.map
