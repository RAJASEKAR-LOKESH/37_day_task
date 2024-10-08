const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const app = express();
const PORT = 3000;
app.use(express.json())
app.use('/files', fileRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
