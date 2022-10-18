Drop Database If Exists Conference;

Create Database Conference;

Create Table User(
User_id int auto_increment primary key,
First_Name varchar(50),
Last_Name varchar(50),
Email varchar(50),
Organisation varchar(100),
Password varchar(20)
);

Create Table Researcher(
Researcher_id int auto_increment primary key,
First_Name varchar(50),
Last_Name varchar(50),
Email varchar(50),
Organisation varchar(100),
Password varchar(20)
);

Create Table Admin(
Admin_id int auto_increment primary key,
First_Name varchar(50),
Last_Name varchar(50),
Email varchar(50),
Organisation varchar(100),
Password varchar(20)
);