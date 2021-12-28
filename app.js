require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')

const password = process.argv[2];
const mongoUrl = `mongodb+srv://fullstackopen:1234@cards.sgkhl.mongodb.net/blog-posts?retryWrites=true&w=majority`
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

module.exports = app;