const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
        minlength: [4, 'Minimum username length is 4 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'] 
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Passwords do not match'
        }
    }
});

//fire a function before doc saved to db 
userSchema.pre('save', async function (next) {
    //if (!this.isModified('password')) {
    //    return next();
    //}

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = this.password;
    
    next();
});

//static method to authenticate user
userSchema.statics.auth = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const authenticate  = await bcrypt.compare(password, user.password)
        if (authenticate) {
            return user; 
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User = mongoose.model('user', userSchema);

module.exports = User; 