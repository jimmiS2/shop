const express = require('express');
const app = express();
const PORT = process.env.PORT || 4100;

app.get('/api/host', (req, res) => {
    res.send({ host : 'jj' });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})
