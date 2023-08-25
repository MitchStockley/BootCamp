"use strict";

const mongoose = require("mongoose"),
//adding validators to the subscriber schema 
  subscriberSchema = mongoose.Schema({
    name: { //requiring the name property
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
      },
    zipCode: {
      type: Number,
      min: [10000, "Zip code too short"],
      max: 99999
    }
  });

module.exports = mongoose.model("Subscriber", subscriberSchema);
