const express = require('express');
const passengerRoute = express.Router();
// model
const PassengerModel = require('../models/Passenger');

passengerRoute.route('/create-passenger').post(async (req, res, next) => {
  try {
    const passenger = await PassengerModel.create(req.body);
    res.json(passenger);
  } catch (error) {
    return next(error);
  }
});

passengerRoute.route('/').get(async (req, res, next) => {
  try {
    const passengers = await PassengerModel.find();
    res.json(passengers);
  } catch (error) {
    return next(error);
  }
});

passengerRoute.route('/edit-passenger/:id').get(async (req, res, next) => {
  try {
    const passenger = await PassengerModel.findById(req.params.id);
    res.json(passenger);
  } catch (error) {
    return next(error);
  }
});

// Update
passengerRoute.route('/update-passenger/:id').put(async (req, res, next) => {
  try {
    const updatedPassenger = await PassengerModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true });
    res.json(updatedPassenger);
    console.log('Passenger successfully updated!');
  } catch (error) {
    return next(error);
  }
});

// Delete
passengerRoute.route('/delete-passenger/:id').delete(async (req, res, next) => {
  try {
    const deletedPassenger = await PassengerModel.findByIdAndRemove(req.params.id);
    res.status(200).json({
      msg: deletedPassenger
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = passengerRoute;
