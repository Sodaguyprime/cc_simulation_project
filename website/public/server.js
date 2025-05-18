const express = require('express');
const bodyParser = require("body-parser");
const { execFile } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/run-index', (req, res) => {
    const exePath = path.join(__dirname, '../executable/index.exe');
    execFile(exePath, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            res.status(500).send(`Stderr: ${stderr}`);
            return;
        }
        res.send(`Output: ${stdout}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});