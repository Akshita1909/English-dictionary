CREATE DATABASE dictionary;
USE dictionary;

CREATE TABLE Users (
    First_Name VARCHAR(30) NOT NULL,
    Last_Name VARCHAR(30) NOT NULL,
    Contact_Info VARCHAR(50) NOT NULL,
    User_Password VARCHAR(64) NOT NULL, 
    DOB DATE
);

SELECT * FROM Users;


