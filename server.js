const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json()); 


app.get('/api/jsonBlob/:filename', (req, res) => {
    var { filename } = req.params;
    
    var filePath = __dirname+"/blobs" + "/" + filename+".json";
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        console.log(err);
        if (err) {
            return res.status(404).json({ error: 'Blob not found' });
        }

        var json = JSON.parse(data);
        res.status(200).json({
            data: json
        });
    });
});

app.put('/api/jsonBlob/:filename', (req, res) => {
    var { filename } = req.params;
    
    var filePath = __dirname+"/blobs" + "/" + filename+".json";
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        console.log(err);
        if (err) {
            return res.status(404).json({ error: 'Blob not found' });
        }

        var json = JSON.parse(data);

        jsonBody = { ...json, ...req.body };

        fs.writeFile(filePath, JSON.stringify(jsonBody), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update file' });
            }

           
            res.status(200).json({
                message: 'Blob updated successfully',
                file: filePath,
                updatedBlob: json
            });
        });
    });
});

app.delete('/api/jsonBlob/:filename', (req, res) => {
    var { filename } = req.params;
    
    var filePath = __dirname+"/blobs" + "/" + filename+".json";
    console.log(filePath);


    fs.unlink(filePath, (err) => {
        if (err) {
            
            return res.status(404).json({ error: 'Blob not found or failed to delete' });
        }

       
        res.status(200).json({
            message: 'Blob deleted successfully',
            file: filePath
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});