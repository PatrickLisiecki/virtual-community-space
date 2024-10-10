import express from "express";

import LocationController from "../controllers/locations.js";

const router = express.Router();

// Route to get all locations
router.get("/", LocationController.getLocations);

router.get("/:locationId", LocationController.getLocationById);

export default router;
