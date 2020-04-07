CREATE DATABASE baby_byrd;

\c baby_byrd;

CREATE TABLE guesses (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL, 
    birthdate DATE NOT NULL, 
    weight REAL NOT NULL, 
    sex TEXT NOT NULL
);

INSERT INTO guesses (name, birthdate, weight, sex)
VALUES ('Zach', '6-24-20', 128, 'Boy'),
('Ned', '6-21-20', 150, 'Girl'), 
('Kira', '6-23-20', 121, 'Boy');