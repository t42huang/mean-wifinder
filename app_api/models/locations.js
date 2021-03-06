const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const reviewSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    },
    reviewText: {
      type: String,
      required: true
    },
    createdOn: {
      type: Date,
      'default': Date.now
    }
});

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: {
        type: Number,
        'default': 0, // surround default in quotes to be safe because default is a JS keyword
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {
        type: { type: String },
        coordinates: [Number]
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

locationSchema.index({coords: '2dsphere'}); // use 2dsphere to add support for GeoJSON longitude and latitude coordinate pairs

mongoose.model('Location', locationSchema);
