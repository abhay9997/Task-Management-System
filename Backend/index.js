const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT
const User = require('./models/User')

const mongoDB = require('./db');

mongoDB.connectDB();
app.use(cors({
  origin: '*'
}));


app.use(express.json());
app.use('/api/', require("./Routes/CreateUser")); // for create user profile
app.use('/api/', require("./Routes/Login"));

app.get('/api/getUser', async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const user = await User.findById(userId).select('name');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ name: user.name });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.use('/api/', require('./Routes/Properties'));

app.use('/api/', require("./Routes/TaskRoutes")); // for display data

app.use('/api', require("./Routes/TaskRoutes"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
