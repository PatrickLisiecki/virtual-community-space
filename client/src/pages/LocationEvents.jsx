import React, { useState, useEffect } from "react";
import EventsAPI from "../services/EventsAPI";
import LocationsAPI from "../services/LocationsAPI";
import Event from "../components/Event";
import "../css/LocationEvents.css";

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index);
                setLocation(locationData);
            } catch (error) {
                throw error;
            }
        };
        const fetchEvents = async () => {
            try {
                const eventsData = await EventsAPI.getEventsByLocation(index);
                setEvents(eventsData);
            } catch (error) {
                throw error;
            }
        };

        fetchLocation();
        fetchEvents();
    }, []);

    return (
        <div className="location-events">
            <header>
                <div className="location-image">
                    <img src={location.image} />
                </div>

                <div className="location-info">
                    <h2>{location.name}</h2>
                    <p>
                        {location.address}, {location.city}, {location.state}{" "}
                        {location.zip}
                    </p>
                </div>
            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map((event, index) => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ))
                ) : (
                    <h2>
                        <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
                        {"No events scheduled at this location yet!"}
                    </h2>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;
