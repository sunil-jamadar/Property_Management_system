import express from "express";
import { createPropertyOwner, loginPropertyOwner } from "../controllers/propertyOwnerController.js";

const router = express.Router();

router.post('/', createPropertyOwner);
router.post('/login', loginPropertyOwner);   // ← New Login Route

export default router;