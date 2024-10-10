import React, { useState, useEffect } from "react";
import EventsAPI from "../services/EventsAPI";
import "../css/Event.css";
import moment from "moment";

const Event = (props) => {
    const [event, setEvent] = useState([]);
    const [time, setTime] = useState([]);
    const [remaining, setRemaining] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventById(props.id);
                setEvent(eventData);
            } catch (error) {
                throw error;
            }
        })();
    }, []);

    useEffect(() => {
        const getTime = () => {
            const formattedTime = moment(event.time, "HH:mm").format("hh:mm A");
            setTime(formattedTime);
        };

        getTime();
    }, [event]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const timeRemaining = await dates.formatRemainingTime(
    //                 event.remaining,
    //             );
    //             setRemaining(timeRemaining);
    //             dates.formatNegativeTimeRemaining(remaining, event.id);
    //         } catch (error) {
    //             throw error;
    //         }
    //     })();
    // }, [event]);

    return (
        <article className="event-information">
            <img src={event.image} />

            <div className="event-information-overlay">
                <div className="text">
                    <h3>{event.title}</h3>
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i>{" "}
                        {moment(event.date).format("MM/DD/YYYY")} <br /> {time}
                    </p>
                    {/* <p id={`remaining-${event.id}`}>remaining</p> */}
                </div>
            </div>
        </article>
    );
};

export default Event;
