const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let passengerSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  destination: {
    type: String,
  },
  departureDate: {
    type: Date,
  },
  isStudent: {
    type: Boolean,
  },
  isSeniorCitizen: {
    type: Boolean,
  },
  tripValue: {
    type: Number,
  }
}, {
  collection: 'passengers'
});

module.exports = mongoose.model('Passenger', passengerSchema);
