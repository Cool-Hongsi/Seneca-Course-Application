# Seneca (School) Course Application

<div>In order for students to provide convenient way to find out course information, created this application as a team project.
Put login and signup functions as well as used two types of databases in order to store course information in PostgreSQL and user information in MongoDB. Also, considered well-organized design and used Google Passport API to make login easily via google account. In order to build up security, all passwords are generated by bcrypt and salt.</div>

<h2>INSTALLATION</h2>
<ul>
    <li>git clone https://github.com/Cool-Hongsi/Seneca-Course-Application.git</li>
    <li>./Seneca-Course-Application -> npm install (To install necessary modules)</li>
    <li>./Seneca-Course-Application -> node server.js (To execute the program)</li>
    <li>(For private issues, the connecting information for DB is encrypted.)</li>
</ul>
<h2>SET UP</h2>
<ul>
    <li>Development Program : Visual Studio Code</li>
    <li>Model : PostgreSQL & MongoDB</li>
    <li>View : jade</li>
    <li>Controller : NodeJS
        <ul>
            <li>bcryptjs</li>
            <li>body-parser</li>
            <li>client-sessions</li>
            <li>express</li>
            <li>fs</li>
            <li>jade</li>
            <li>mongodb</li>
            <li>mongoose</li>
            <li>passport</li>
            <li>passport-google-oauth</li>
            <li>passport-http-bearer</li>
            <li>pg</li>
            <li>sequelize</li>
        </ul>
    </li>
</ul>
<h2>PROCESS</h2>
    <ol>
        <li>Initially, the user is encouraged to sign up in order to use school course application</li>
        <li>User information will be stored in MongoDB (The password is encrypted by bycrpyt and salt) and School course information was stored as JSON file in PostgreSQL.</li>
        <li>The user can select the semester from side bar, the course information will be printed as the semester.</li>
        <li>By using filter function, the user can focus what they want to see easily and quickly.</li>
        <li>After clicking view button for course, it will transfer to the description page.</li>
        <li>Description page will show specific information and comment function to communicate with other students.</li>
    </ol>
