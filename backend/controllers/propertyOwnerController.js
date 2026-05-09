// import PropertyOwner from "../models/PropertyOwner-model.js";

// // Create Property Owner
// export const createPropertyOwner = async (req, res) => {
//     try {
//         const { name, email, phone, address, aadharNumber, panNumber, bankDetails } = req.body;

//         // Check if owner already exists
//         const ownerExists = await PropertyOwner.findOne({ email });
//         if (ownerExists) {
//             return res.status(400).json({ message: "Property Owner with this email already exists" });
//         }

//         const owner = await PropertyOwner.create({
//             name,
//             email,
//             phone,
//             address,
//             aadharNumber,
//             panNumber,
//             bankDetails
//         });

//         res.status(201).json({
//             message: "Property Owner created successfully",
//             owner
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

import PropertyOwner from "../models/PropertyOwner-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";   // ← Make sure this is imported

// ✅ Generate Token Function
const generateToken = (id) => {
    return jwt.sign(
        { id, role: "propertyOwner" }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d' }
    );
};

// Create Property Owner
export const createPropertyOwner = async (req, res) => {
    try {
        const { name, email, password, phone, address, aadharNumber, panNumber, bankDetails } = req.body;

        // Check if owner already exists
        const ownerExists = await PropertyOwner.findOne({ email });
        if (ownerExists) {
            return res.status(400).json({ message: "Property Owner with this email already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const owner = await PropertyOwner.create({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            aadharNumber,
            panNumber,
            bankDetails
        });

        // Don't send password in response
        const ownerResponse = owner.toObject();
        delete ownerResponse.password;

        res.status(201).json({
            message: "Property Owner created successfully",
            owner: ownerResponse
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login Property Owner
export const loginPropertyOwner = async (req, res) => {
    try {
        const { email, password } = req.body;

        const owner = await PropertyOwner.findOne({ email });
        if (!owner) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, owner.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.json({
            _id: owner._id,
            name: owner.name,
            email: owner.email,
            role: "propertyOwner",
            token: generateToken(owner._id)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};