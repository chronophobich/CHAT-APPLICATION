const express = require('express');
const cors = require('cors')
const chats = require('./data/data');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send("API IS Running");
});
app.get('/api/chats', (req, res) =>{
    res.send(chats);
});
app.get('/api/chats/:id', (req, res) => {
    const user = chats.find((c) => c._id === req.params.id);
    res.send(user);
})


app.listen(PORT, console.log(`server is up and running on :${PORT}`));

