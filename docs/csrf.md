---
id: csrf
title: What is CSRF
sidebar_label: CSRF 
---
CSRF 
=====
CSRF stands for Cross/Client Site Request Forgery. A CSRF attack forces an authenticated user (victim) to send a forged HTTP request, including the victim's session cookie to a vulnerable web application, which allows the attacker to force the victim's browser to generate request which is not actually made by user ....


The browser requests automatically include any credentials associated with the site, such as the user's session cookie, IP address, Windows domain credentials, and so forth. Therefore, if the user is currently authenticated to the site, the site will have no way to distinguish between the forged request sent by the victim and a legitimate request sent by the victim.

Eg. already logged in into a bank site and clicking on a ad on other malicious website stating "click here to win an iphone X" and is malicious.


----------------------------------------------------------------------------------------------------------------------------

MISSING FUNCTION LEVEL ACCESS CONTROL
=====================================

Let us first understand what Access Control means.
Access Control : access control is a process by which users are granted access and certain privileges to systems, resources or information. This term is usually derives for Authentication Checks.

Most of the web applications verify function level access rights before making that functionality accessible to the user. Missing Function Level Access Control is one of the vulnerabilities on OWASP's Top 10 list and occurs when those authentication function checks are insufficient and attackers misuse them.


    www.abc.com/login/login.php?id=user
     _________
    |		  |
    |normal   |
    |   user  |
    |         |
    |_________|
    

    www.abc.com/login/login.php?id=admin

    ____________
   |			|
   |ADMIN Panel |   <--- Redirect you to admin panel 
   |			|        No access control 
   |			|
   |____________|

Demonstration on LVS via Unrestricted User Access to the Admin Account.

----------------------------------------------------------------------------------------------------------------------------

UNVALIDATED REDIRECTS AND FORWARDS
===================================


Most web applications on the internet frequently redirect and forward users to other pages or other external websites.
Invallidated/Unvalidated redirects and forwards means redirecting a authenticated and valid user to a phishing or malicious web page which defines a malicious activity created by the attacker as using forwards to access unauthorized pages. 

How to find the redirecting value?
There is a redirect to="url" value in the Hyperlinks, this will signify that the URL is redirecting us to a particular malicious link.


www.ronak.com/login/redirectTo=www.google.com/antwasp





Demonstration on LVS of Manual Redirects and Automatic Redirects.

------------------------------------------------------------------------------------------------------------------------
Automated VAPT Tool - NETSPARKER
================================

Netsparker is a web application security scanner, with support for both detection and exploitation of vulnerabilities. It is like Acunetix only, but more advanced and flexible in Report Generation and finding out Vulnerabilities.

Demo Application - https://www.netsparker.com/web-vulnerability-scanner/download/

Demonstration of Report Generation and explanation on demo.testfire.net via Netsparker.

----------------------------------------------------------------------