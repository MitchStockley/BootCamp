"use strict";

//isting 21.1 Improved Subscriber schema in subscriber.js
const mongoose = require("mongoose"),
  { Schema } = mongoose,
  subscriberSchema = new Schema({ //add schema properties
    name: {
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
    },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }] //associate muitiple courses
  }, {
    timestamps: true
  });
subscriberSchema.methods.getInfo = function () { //add get info instance methods 
  return `Name: ${this.name} Email: ${this.email}
 Zip Code: ${this.zipCode}`;
};

module.exports = mongoose.model("Subscriber", subscriberSchema); //export the subscribers model