---
id: SqlBasics
title: Introduction to Sql
sidebar_label: SQL Basics
---


INTRODUCTION TO DBMS
=====================

Database
========
A database is something which stores the information (processed data).


DBMS
====
DBMS stands for Database Management System .The DBMS manages the data and arrange it in an organized form i.e. in the form of tables. The DBMS can Create, Insert, Modify, Delete and perform other operations on the Tables and Columns the Database we are operating on. 

Databases stores data in the Forms of Tables  --> Columns and Rows.

Eg. Student RECORD 

------------------------------------------------------------------
Sno.| NAME | CLASS | CONTACT | ADDRESS 			| EMAIL   		 |
1   |abhi  |  1    | 2260143 | JANAKPURI EAST   | ABH1@gmail.com |
2	|Ben   |  1    | 1100192 | KALKAJI ext.		| ben@gmail.com  |
------------------------------------------------------------------


The above data is a structured data in the form of rows and columns.
So in order to extract,alter or modify data from the above table we use some query and these queries are considered as STRUCTURED QUERIED LANGUAGE or
SQL.

-------------------------------------------------------------

SQL BASICS
========== 
SQL is the language in which a Database can communicate by creating , modifying or inserting any type of data. Structured Query Language works on the basis of queries.
Select * from table_name;
Queries
-------
1. Insert
=========
    Insert into <table_name>(Columns_name) values(<Values to be inserted in Ddouble quotes>);
 
    INSERT INTO `information` (`Name`, `Age`, `Gender`, `Address`) VALUES ('aman', '25', 'M', 'Vikram NAGAR');
2. Select
=========
    Select * from <table_name>;
 
    * ---> everything
    Select * from information; 
3. Update
=========
    Update <table_name> set <value to be change> where <condition>;
 
    UPDATE information set Age=30 WHERE Name="Aman"
4. Where
========
    Condition clause
    Select * from information where name like "A%" 
5. Delete
=========
    Delete from <table_name> where <condition>;
 
    Delete from information where name="Aman"
6. Create
=========
    create table <table_name>(Column_name data_type(length));
 
    CREATE TABLE info(name text(30),salary int(6));
7. Order By
===========
    Is used fir arranging data either in ascending order or in descending order.
    select * from <table_name> order by name;
    select * from staff order by age;
8. group by
===========
    It is used for making a group
 
    select * from table_name group by gender;
9. Union
========
    Used fro combining data of two different tables. Column number in both the table must be equal.
    null 
10. Information_schema
======================
    It is a meta tables which stores only meta data ---> only table names and column names, but it will not store the data inside the column name or table.
 
    If I want to see only the table name ---> Information_schema.tables
 
    If I want to see the column name --> Information_schema.columns
