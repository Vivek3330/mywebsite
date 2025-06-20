//const express = require('express');
//const bodyParser = require('body-parser');
//const { pool } = require('./db');
import pg from "pg";
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//const path = require('path');

//const app = express();
const PORT = 3000;

const app = express();
const db=new pg.Client({
user:"postgres",
host:"localhost",
database:"appointments",
password:"BunnyVivekkumar@123",
port:5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route for HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/book', async (req, res) => {
  const { name, age,doctor, date, time } = req.body;

  try {
    await db.query(
      'INSERT INTO appointments (patientname, doctorname, date, time) VALUES ($1, $2, $3, $4)',
      [name,age, doctor, date, time]
    );
      db.end();
    res.send('<p>Appointment booked successfully! <a href="/">Go back</a></p>');
  } catch (err) {
    console.error(err);
    res.status(500).send('<p>Server error. Please try again. <a href="/">Go back</a></p>');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
