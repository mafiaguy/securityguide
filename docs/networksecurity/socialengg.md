---
id: socialengg
title: Introduction to socialengg
sidebar_label: Social Engineering
---
SOCIAL ENGINEERING TOOLKIT (SET)
================================
The Social Engineering Toolkit (SET) is an automated python based toolkit, specifically designed to perform advanced attacks against the human elements and is pre-installed in Kali Linux. It is very easy to use and deploy some Social Engineering Attacks, if as layman has some knowledge of Kali Linux and SET, they can use it very easily. A user just have to enter the numbers, IP Addresses, domain names etc etc just for exploiting the entities. 


Spear Phishing : Phishing done via emails.

WALKTHROUGH STEPS
=================

= Opening up Kali Linux, make sure VMmachine is in Bridged Mode.
= In the Terminal type > "setoolkit"
= This will show you options like these : 
  The Social-Engineer Toolkit is a product of TrustedSec.
  Select from the menu:

   1) Social-Engineering Attacks
   2) Penetration Testing (Fast-Track)
   3) Third Party Modules
   4) Update the Social-Engineer Toolkit
   5) Update SET configuration
   6) Help, Credits, and About

  1)  Exit the Social-Engineer Toolkit


ATTACK VECTORS
==============
1. Going through Web Attacks
    = By pressing 1 for "Social-Engineering Attacks" we will get : 
    Select from the menu:

      1) Spear-Phishing Attack Vectors
      2) Website Attack Vectors
      3) Infectious Media Generator
      4) Create a Payload and Listener
      5) Mass Mailer Attack
      6) Arduino-Based Attack Vector
      7) Wireless Access Point Attack Vector
      8) QRCode Generator Attack Vector
      9) Powershell Attack Vectors
     10) SMS Spoofing Attack Vector
     11) Third Party Modules

     99) Return back to the main menu.

     =  Going for "2) Website Attack Vectors" : 
      
      1) Java Applet Attack Method
      2) Metasploit Browser Exploit Method
      3) Credential Harvester Attack Method
      4) Tabnabbing Attack Method
      5) Web Jacking Attack Method
      6) Multi-Attack Web Method
      7) Full Screen Attack Method
      8) HTA Attack Method

     99) Return to Main Menu

     =  Going with Credential Harvester Attack which uses Advanced Phishing Techniques : 
        1) Web Templates
        2) Site Cloner
        3) Custom Import

        99) Return to Webattack Menu
 
        = In this either we can go for 2) Site Cloner OR 3) Custom Import, Entering Web Site Path, IP Address to run the Harvestor, and getting the Data.


2. Mass Mailer Attack
    =  SElecting from 1) Social Engineering Attacks, the next is 5) Mass Mailer Attack.
    =  Select 2) Email Mass Mailer Attack
    =  Create a Mail lists on the Attacker's Machine.
    =  Give the path of the Mail List
    =  Select a Gmail account and enter the details.
    =  Add further details of the Dependencies for Mass Mailer Attack
    =  Use ^C for sending the mails.

3. Powershell Attack Vectors
    = Selecting from 1) Social Engineering Attacks, the next is 9) Powershell Attack Vectors.
    = Selecting 1) Powershell Alphanumeric Shellcode Injector
    = Enter LHOST and LPORT
    = Go to the path where the Powershell Exploit File is saved, which is : "/root/.set/reports/powershell/" 
    = Copy the text file, and save it to Desktop.
    = Change the extension from .txt to .bat .
    = Share the .bat file to the Victim's PC.
    = Run the listener on Attacking Machine.
    = Run the powershell.bat PAYLOAD file.
    = Get the Meterpreter Session.

4.  Spear Phishing
    =  SElecting from 1) Social Engineering Attacks, the next is 1) Spear-Phishing Attack Vectors.
    =  Select 2) Create a FileFormat Payload.
    =  Select a Payload.
    =  Enter the requirements of sending spear phishing mails.
    =  Trigger the Victim.


BEEF FRAMEWORK
===============

BEEF is short for The Browser Exploitation Framework. It is a penetration testing tool that focuses on the web browser. BEEF is in-built in Kali Linux, and it can be started as a service and can be accessed via a web browser on your localhost machine. We can easily hook a particular Victim through BEEF.

STARTING UP BEEF FRAMEWORK
===========================
=  Applications > Search BEEF > Click on "BEEF Start"
=  It automatically runs and open up in the Browser using localhost IP Address and Port Number 3000. 
         http://127.0.0.1:3000/ui/panel
=  First it will be opening up a Authentication Page with the URL. The default credentials are beef:beef .
         http://localhost:3000/ui/authentication 

=  Now we have to trigger the Victim to open the IP of the attacker where BEEF is running and then further exploiting through the framework after hooking. 

=  It will be showing the Victim's IP in the Online Browser, further when selecting the Victim, we can navigate through "Commands" section for further Exploitation.


HOOKING URL : 

ATTACKER'SIP:3000/demos/butcher/index.html