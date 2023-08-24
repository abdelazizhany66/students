/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE students(
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(25) NOT NULL,
        age INTEGER,
        email VARCHAR(20) NOT NULL
    )
    `)
};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE students
    `)
};
