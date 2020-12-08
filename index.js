const express = require('express');
require('dotenv').config();
const cookieSession = require('cookie-session');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const connectDB = require('./config/connectDB');
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(
  cookieSession({
    signed: false,
  })
);

connectDB();

// Routes
app.use('/api/profile', require('./routes/profiles'));
app.use('/api/users', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

// Error middleware
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
