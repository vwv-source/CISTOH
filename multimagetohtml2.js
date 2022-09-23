var fs = require('fs')
const util = require('util');
var pixels = require('image-pixels');
var jsfiletop = `var i=document.querySelector(".i");setTimeout(function(){},5000);`;
var jsfile;
var img = [];
var currentpixel = 0;
var currenttime = 0;
var completedfiles = 0;
var currentfile;
var currentcolor;

fs.writeFileSync("./Output/outputfile.js", "");
fs.appendFileSync("./Output/outputfile.js", jsfiletop);

var bar = new Promise((resolve, reject) => {
    fs.readdir('./Video-Images/', (err, files) =>{
        files.forEach(function(file, index){
            hello()
            async function hello(){
                var data = await pixels('Video-Images/'+file)
                data.data.forEach(function(pixel){
                    if(currentpixel >= data.data.length){
                        return
                    }
                    if ((data.data[currentpixel]*0.299 + data.data[currentpixel + 1]*0.587 + data.data[currentpixel + 2]*0.114) > 186){
                        img += `<b></b>`
                    }else{
                        img += `<l></l>`
                    }
                    currentpixel += 4;
                    currentfile = file;
                })
                currenttime += 20;
                //jsfile += "var f"+currentfile.replace(".", "").replace(/^0+/, '')+"=`"+img+"`;setTimeout(function(){i.innerHTML=f"+currentfile.replace(".", "").replace(/^0+/, '')+"},"+currenttime+");"
                fs.appendFileSync("./Output/outputfile.js", "var f"+currentfile.replace(".", "").replace(/^0+/, '')+"=`"+img+"`;setTimeout(function(){i.innerHTML=f"+currentfile.replace(".", "").replace(/^0+/, '')+"},"+currenttime+");");
                img = [];
                currentpixel = 0
                if (index === files.length -1) resolve();
            }
        })
        
    });
    
});

/* bar.then(function(){
    fs.writeFileSync("./Output/outputfile.js", jsfile , function(){});
}) */