const API_BASE_URL = "http://localhost:3000/api";

// Fetch all events
const getAllEvents = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/events`);
        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }
        const events = await response.json();
        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

// Fetch a single event by ID
export const getEventById = async (eventId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/events/${eventId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch event with id ${eventId}`);
        }
        const event = await response.json();
        return event;
    } catch (error) {
        console.error(`Error fetching event ${eventId}:`, error);
        return null;
    }
};

// Fetch events for a specific location
const getEventsByLocation = async (locationId) => {
    try {
        const response = await fetch(
            `${API_BASE_URL}/events/location/${locationId}`,
        );
        if (!response.ok) {
            throw new Error(
                `Failed to fetch events for location ${locationId}`,
            );
        }
        const events = await response.json();
        return events;
    } catch (error) {
        console.error(
            `Error fetching events for location ${locationId}:`,
            error,
        );
        return [];
    }
};

export default {
    getAllEvents,
    getEventById,
    getEventsByLocation,
};
