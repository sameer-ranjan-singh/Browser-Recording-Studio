const mongoose = require("mongoose")
  
// Define mongoose schemas  
const adminSchema = new mongoose.Schema({
    emailID:  String,
    username: String,
    password: String,
  });

const recordingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
  recordingUrl: { type: String, required: true },
  recordingType: { type: String, enum: ['window', 'webcam', 'audio'], required: true },
});

// Define mongoose models
const Admin = mongoose.model('Admin', adminSchema);
const Recording = mongoose.model('Recording', recordingSchema);


module.exports = {
    Admin,
    Recording
}