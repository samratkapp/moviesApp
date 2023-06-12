import {model,Schema} from 'mongoose';

const userSchema = Schema({
    firstName:{
        type: String,
        required: true,
      },
    lastName:{
        type: String,
        required: true,
      },
    email:{
        type: String,
        required: true,
      },
    contactNo:{
        type: Number,
        required: true,
      },
});
export default model('User',userSchema);