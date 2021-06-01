setInterval(() => {
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

   hour.style.transform=`rotate(${hrotation}deg)`
   minute.style.transform=`rotate(${mrotation}deg)`
   second.style.transform=`rotate(${srotation}deg)`
}, 1000);

setInterval(() => {
    document.getElementById("myaudio1").play();
    console.log('your audio has started now');
},60000);
setInterval(() => {
    document.getElementById("myaudio2").play();
    console.log('Your tick audio is started just now');
  }, 1000);