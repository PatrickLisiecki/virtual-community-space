const API_BASE_URL = "http://localhost:3000/api";

// Fetch all locations
const getAllLocations = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/locations`);
        if (!response.ok) {
            throw new Error("Failed to fetch locations");
        }
        const locations = await response.json();
        return locations;
    } catch (error) {
        console.error("Error fetching locations:", error);
        return [];
    }
};

// Fetch a single location by ID
const getLocationById = async (locationId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/locations/${locationId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch location with id ${locationId}`);
        }
        const location = await response.json();
        return location;
    } catch (error) {
        console.error(`Error fetching location ${locationId}:`, error);
        return null;
    }
};

export default {
    getAllLocations,
    getLocationById,
};
