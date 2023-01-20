const mongoose = require('mongoose');
// const bcrypt = require("bcrypt.js");
bcrypt = require('bcrypt');
// schema
// const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  firstname: { 
    type: String,
    required: [true,"First name is required"]
  },
  lastname: {
    type: String,
    required: [true,"Last name is required"]
  },
  email: {
    type: String,
    required: [true,"Email is required"],
  },
  password: {
    type: String,
    required: [true,"Password is required"],
  },
  isAdmin:{
    type: Boolean,
    default: false,
  },
},{
    timestamps: true,
});

//Hash password
userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
      next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// compile schema into model
const User = mongoose.model('User', userSchema);
module.exports = User;