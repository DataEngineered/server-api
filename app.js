const express = require('express');
const PORT = 9001;
const app = express();

app.use('/', (req, res) => {
    const coba = req.body;
    console.log(coba);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});