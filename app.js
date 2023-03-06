const express = require('express');
const PORT = 9001;
const app = express();

app.use('/', (req, res) => {
    console.log(res);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});