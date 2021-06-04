# trainee_api
Colektia technical test - API

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement and MySQL.

## Create database
Inside the folder called "database", there is a file with extension .sql, enter mysql:
- Create a database - create database database_name;
- Select database - use database_name;
- Load the tables - source file.sql;

## Configure connnection
Apply the command on terminal: 
cp config.js.example config.js

In this file, add the necessary data that matches your local database
- Example
username: "root",
password: "",
database: "sequelize",
host: "localhost"

## Configure environment
Apply de command on terminal:
cp .env.example .env

## Install dependencies
npm install

## Run for development
npm run dev
