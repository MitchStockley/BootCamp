

//listing 18.1: Creating a user medel
const mongoose = require("mongoose"),
    { schema } = mongoose,

    userSchema = new Schema({ //create user Schema
        name: {
            first: { //adding first and last name properties
                type: string,
                trim: true
            },

            last: {
                type: string,
                trim: true
            }
        },
        email: {
            type: string,
            required: true,
            lowercase: true,
            unique: true
        },

        zipCode: {
            type: Number,
            min: [1000, "Zip code too short"],
            max: 99999
        },

        password: { //add password property
            type: string,
            require: true
        },
        courses: [{ type: Schema.Types.ObjectId, ref: "Courses" }],
        subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" } //add a subscribed account to connect users to subscribers
    }, {
        timestamps: true //add a timestamps properties to record createdAt and  
    });
    
//Listing 18.2 Adding a virtual attribute to the user model in user.js
userSchema.virtual("fullName")
    .get(function () {
        return `${this.name.first} ${this.name.last}`;
    });
module.exports = mongoose.model("User", userSchema);