const express = require('express');
require('dotenv').config();
const { sequelize } = require('./models');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

sequelize.sync().then(() => {
  console.log('✅ Database connected');
  app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
});
