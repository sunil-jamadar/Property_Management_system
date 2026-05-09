import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PropertyOwner',
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [{
        type: String,           // Array of image URLs
        required: true
    }],
    amenities: [{
        type: String
    }],
    status: {
        type: String,
        enum: ['Available', 'Rented', 'Maintenance'],
        default: 'Available'
    },
    featured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Index for faster queries
propertySchema.index({ owner: 1, status: 1 });

const Property = mongoose.model('Property', propertySchema);
export default Property;

