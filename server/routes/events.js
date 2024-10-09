import express from "express";

import EventController from "../controllers/events.js";

const router = express.Router();

// Route to get all events
router.get("/", EventController.getEvents);

router.get("/:id", EventController.getEventById);

// Route to get events by a specific location
router.get("/location/:locationId", EventController.getEventsByLocation);

export default router;
