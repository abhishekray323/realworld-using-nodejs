const mongoose= require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schema= mongoose.schema;

var UserSchema= new schema({
   username: {type:String, lowercase: true, unique: [true, "can't blank"], match: [/^[a-zA-Z0-9]+$/,'is invalid'], index: true}
   bio:  String,
   email: {type:String, lowercase: true, unique: [true, "can't be blank"], index: true}
   image: String,
   hash: String,
   salt: String

},{timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'this is already taken, try something else'});

mongoose.model('User', UserSchema);

