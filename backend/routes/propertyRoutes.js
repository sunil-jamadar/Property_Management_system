import express from "express";
import { 
    getOwnerProperties, 
    addProperty, 
    updateProperty, 
    deleteProperty 
} from "../controllers/propertyController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/', protect, getOwnerProperties);
router.post('/', protect, addProperty);
router.put('/:id', protect, updateProperty);
router.delete('/:id', protect, deleteProperty);

export default router;
