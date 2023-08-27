const express = require('express');
const jwt = require('jsonwebtoken');
const { SECRET } = require("../middleware/auth")
const { authenticateJwt } = require("../middleware/auth")
const { Admin , Recording } = require("../db/index.js")

const router = express.Router()

router.get("/", (req,res) => {
  res.status(200).send({
    message :"Hello from Render.com / sameer",
  })
})

router.get("/me",authenticateJwt , (req , res) => {
    res.json({
      username: req.user.username 
    })
  })
  
  router.post('/signup', (req, res) => {
    const { username, password, emailID } = req.body;
    function callback(admin) {
      if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } else {
        const obj = { username: username, password: password, emailID :emailID };
        const newAdmin = new Admin(obj);
        newAdmin.save();
        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
      }
  
    }
    Admin.findOne({ username }).then(callback);
  });
  
  router.post('/login', async (req, res) => {
    const { username, password, emailID } = req.headers;
    const admin = await Admin.findOne({ username, password, emailID });
    console.log(admin)
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '3h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  router.post('/recordings',authenticateJwt, async (req, res) => {
    try {
      const recording = new Recording({
        userId: req.body.userId,
        recordingUrl: req.body.recordingUrl,
        recordingType: req.body.recordingType,
      });
      await recording.save();
      res.status(201).json(recording);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

  module.exports = router