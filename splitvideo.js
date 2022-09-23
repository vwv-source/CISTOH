var fs = require('fs');
var currentfile = 0;

fs.readdir('./Video-Images/', (err, files) => {
    files.forEach(file => {
        if(currentfile % 2 == 0){
            try {
                fs.unlinkSync("./Video-Images/"+file)
              } catch(err) {
                console.error(err)
              }
        }
        currentfile += 1
    });
});