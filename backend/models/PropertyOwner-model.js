// import mongoose from "mongoose";

// const propertyOwnerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     },
//     phone: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         trim: true
//     },
//     aadharNumber: {
//         type: String,
//         unique: true,
//         sparse: true
//     },
//     panNumber: {
//         type: String,
//         unique: true,
//         sparse: true
//     },
//     bankDetails: {
//         accountNumber: String,
//         ifscCode: String,
//         bankName: String
//     },
//     status: {
//         type: String,
//         enum: ['active', 'inactive'],
//         default: 'active'
//     }
// }, { timestamps: true });

// const PropertyOwner = mongoose.model('PropertyOwner', propertyOwnerSchema);
// export default PropertyOwner;



import mongoose from "mongoose";

const propertyOwnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        trim: true
    },
    aadharNumber: {
        type: String,
        unique: true,
        sparse: true
    },
    panNumber: {
        type: String,
        unique: true,
        sparse: true
    },
    bankDetails: {
        accountNumber: String,
        ifscCode: String,
        bankName: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps: true });

const PropertyOwner = mongoose.model('PropertyOwner', propertyOwnerSchema);
export default PropertyOwner;