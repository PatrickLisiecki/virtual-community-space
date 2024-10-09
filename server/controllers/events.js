import { pool } from "../config/database.js";

// Get all events
const getEvents = async (req, res) => {
    try {
        const results = await pool.query(
            "SELECT * FROM events ORDER BY id ASC",
        );
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

// Get an event by ID
const getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await pool.query("SELECT * FROM events WHERE id = $1", [
            id,
        ]);
        if (results.rows.length === 0) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

// Get events for a specific location
const getEventsByLocation = async (req, res) => {
    const { locationId } = req.params;
    try {
        const results = await pool.query(
            "SELECT * FROM events WHERE location = $1 ORDER BY date ASC",
            [locationId],
        );
        if (results.rows.length === 0) {
            return res
                .status(404)
                .json({ message: "No events found for this location" });
        }
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

export default {
    getEvents,
    getEventById,
    getEventsByLocation,
};
