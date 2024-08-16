const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


const folderPath="/Files"
router.post('/create', (req, res) => {
    const moment = require('moment');
    const timeStamp=moment().format("DD-MM-YYYY-HH-mm-ss")
    const fileName = `${timeStamp}.txt`;
    fs.writeFile(`/GUVI/Task/Node JS/37_day/Files/${fileName}`,timeStamp,(err)=>{
        if(err)
        {
            console.log(err)
            res.send("Error")
        }
        else
        {
            console.log("File Created Successfully")
            res.send({message:"File Created Successfully",
                Filename:fileName
            })
        }
    })
    
});


router.get('/', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading files' });
        }
        const textFiles = files.filter(file => file.endsWith('.txt'));
        res.status(200).json({ files: textFiles });
    });
});

module.exports = router;
