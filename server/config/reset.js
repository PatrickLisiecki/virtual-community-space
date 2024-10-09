import { pool } from "./database.js";
import "./dotenv.js";
import locationData from "../data/locations.js";
import eventData from "../data/events.js";

// Create Locations Table
const createLocationTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(2) NOT NULL,
        zip VARCHAR(10) NOT NULL,
        image VARCHAR(255) NOT NULL
    )
`;

// Create Events Table
const createEventTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time INT NOT NULL,
        location INT REFERENCES locations(id),
        image VARCHAR(255),
        remaining_years INT,
        remaining_months INT,
        remaining_days INT
    )
`;

const createTables = async () => {
    try {
        await pool.query(createLocationTableQuery);
        console.log("Locations table created successfully");

        await pool.query(createEventTableQuery);
        console.log("Events table created successfully");
    } catch (err) {
        console.error("Error creating tables", err);
    }
};

// Seed Locations Table
const seedLocationTable = async () => {
    locationData.forEach((location) => {
        const insertLocationQuery = {
            text: `INSERT INTO locations 
                (name, address, city, state, zip, image) 
                VALUES ($1, $2, $3, $4, $5, $6)`,
            values: [
                location.name,
                location.address,
                location.city,
                location.state,
                location.zip,
                location.image,
            ],
        };

        pool.query(insertLocationQuery, (err, res) => {
            if (err) {
                console.error("Error inserting location", err);
                return;
            }
            console.log(`${location.name} added successfully`);
        });
    });
};

// Seed Events Table
const seedEventTable = async () => {
    eventData.forEach((event) => {
        const insertEventQuery = {
            text: `INSERT INTO events 
                (title, date, time, location, image, remaining_years, remaining_months, remaining_days) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            values: [
                event.title,
                event.date,
                event.time,
                event.location,
                event.image,
                event.remaining.years,
                event.remaining.months,
                event.remaining.days,
            ],
        };

        pool.query(insertEventQuery, (err, res) => {
            if (err) {
                console.error("Error inserting event", err);
                return;
            }
            console.log(`${event.title} added successfully`);
        });
    });
};

const seedDatabase = async () => {
    await createTables();
    await seedLocationTable();
    await seedEventTable();
};

seedDatabase();
