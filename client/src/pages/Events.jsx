import { useState, useEffect } from "react";
import EventsAPI from "../services/EventsAPI";
import Event from "../components/Event";
import "../css/LocationEvents.css";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents();
                setEvents(eventsData);
            } catch (error) {
                throw error;
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="location-events">
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
                        {"No events!"}
                    </h2>
                )}
            </main>
        </div>
    );
};

export default Events;
