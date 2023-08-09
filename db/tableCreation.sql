CREATE DATABASE assignment;
USE assignment;
CREATE TABLE User (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    role VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE Feed (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    url VARCHAR(255),
    description TEXT
);
