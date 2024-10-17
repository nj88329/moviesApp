const multer  = require('multer');
const fs = require('fs');
const path = require('path');

const multerStorage = multer.diskStorage({
    
    destination:(req, file, cb)=>{   
        
        const dir = '../frontend/vite-project/src/assets/others';
        // Check if directory exists, create if not
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir); // Save files in assets/others
    },
    filename : (req, file, cb)=>{
        cb(null, `${Date.now()}.${file.originalname}`);
    },
})


// Use diskstorage option in multer
const upload = multer({ storage: multerStorage });

module.exports = { upload , multer}