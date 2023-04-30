const express = require('express');
const app = express();
const PORT = process.env.PORT || 4100;

app.get('/', (req, res) => {
    res.send(`Response Complate`);
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
  })

  
  