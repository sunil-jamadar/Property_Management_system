import Property from "../models/Property-model.js";

// @desc    Get all properties of logged-in owner
export const getOwnerProperties = async (req, res) => {
    try {
        const properties = await Property.find({ owner: req.user.id });
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add new property
export const addProperty = async (req, res) => {
    try {
        const property = await Property.create({
            ...req.body,
            owner: req.user.id
        });
        res.status(201).json({ message: "Property added successfully", property });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update property
export const updateProperty = async (req, res) => {
    try {
        const property = await Property.findOneAndUpdate(
            { _id: req.params.id, owner: req.user.id },
            req.body,
            { new: true }
        );

        if (!property) {
            return res.status(404).json({ message: "Property not found or unauthorized" });
        }

        res.json({ message: "Property updated successfully", property });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete property
export const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findOneAndDelete({
            _id: req.params.id,
            owner: req.user.id
        });

        if (!property) {
            return res.status(404).json({ message: "Property not found or unauthorized" });
        }

        res.json({ message: "Property deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

