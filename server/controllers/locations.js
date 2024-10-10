import { pool } from "../config/database.js";

// Get all locations
const getLocations = async (req, res) => {
    try {
        const results = await pool.query(
            "SELECT * FROM locations ORDER BY id ASC",
        );
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

// Get a location by ID
const getLocationById = async (req, res) => {
    const { locationId } = req.params;
    try {
        const results = await pool.query(
            "SELECT * FROM locations WHERE id = $1",
            [locationId],
        );
        if (results.rows.length === 0) {
            return res.status(404).json({ message: "Location not found" });
        }
        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

export default {
    getLocations,
    getLocationById,
};
