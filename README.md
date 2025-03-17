**Toll Passages Management and Analysis WebApp**

This web application was developed as part of the Software Engineering course at ECE NTUA by me, Dimitris Thivaios, Dimitris Liakis, and Vassilis Anastasiadis.

**Features**

    Map of Greece with all Toll Stations (using Leaflet.js)
    Predictions of passing car flows using Machine Learning models
    Statistics for all tolling companies
    Debt Optimization between companies created by cross e-pass usage
    CLI-client for Admin Management

**Software Development Stack**

    Backend: Node.js / Express (REST API)
    Frontend: React.js
    Database: MySQL
    Machine Learning: scikit-learn
    Testing: Jest

**Documentation**

    UML Diagrams
    Open API Specifications


**Depedencies**

    You need the depedencies to run it properly. For cli-client you need to npm link. For front-end npm start, for back-end node server.js to run it.

**Database (NECESSARY ACTIONS)**

-In order to fullfill your MYSQL DB, you need to go to /uploads directory
run --> python3 passages2mysql.py passes14.csv.

-In order to create the schema and the deault data that you need add to your database the .sql files schema.sql and data.sql from Database_mysql dir.

**HOW TO LOGIN** 

- First set up your database. Then go to back-end/hashPassword.js and find the admin's user name and password. Then you can have access to all the features of the app.

Disclaimer: This project was created for educational purposes only and is not intended for commercial use.

My Contributions

As part of this project, my main focus was on:

   Developing REST API backend using Node.js and Express,  designing DB, contributing in documentation.
    Conducting API functional testing to ensure proper functionality of the backend.
   ![image](https://github.com/user-attachments/assets/ffa85471-cacc-44a6-8ac8-006ad04db8a7)


Give us a star if you liked the project!

