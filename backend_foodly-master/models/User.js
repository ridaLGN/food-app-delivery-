const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    otp: {type: String, required: false, default: "none"},
    password: {type: String, required: true},
    verification: {type: Boolean, default: false},
    phone: {type: String, default: "0123456789"},
    phoneVerification: {type: Boolean, default: false},
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: false,
    },
    userType: {type: String, required: true, default: "Client", enum: ['Client', 'Admin', 'Vendor', 'Driver']},
    profile: {type: String, default: 'https://assets.zyrosite.com/AMq4M8nN3ys8DGGw/whatsapp-image-2024-07-20-a-11.14.06_ba6d4251-AzG7E3QxBwFew07g.jpg'}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);