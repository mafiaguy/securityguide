---
id: xss
title: Introduction to XSS
sidebar_label: Cross Site Scripting
---

XSS (Cross Site Scripting)

	In which the web application or the web site executes the html tags as the normal input and displays the data as that using htmls tags.

	In this type of attack attacker can make the target to do what ever he wants to do. An attacker can craft a link and send it to the target, when the target will open the crafter link, then the malicious work of the attacker is carried out.

There are three types of XSS
----------------------------
1. Reflected XSS
2. Stored XSS
3. DOM Based XSS

4. Reflected XSS
	In this type of xss, the attacker can attack a person one time using the crafted link. The attacker can inject the web application just once, then the malicious query will get away.

Bypass
======
	<script> ---> remove

	<script type="text/javascript">alert("hacked")</script>
	<ScRiPt>alert("hacked")</script>
	<scr<script>ipt>alert("hacked")</script>
			<scr<script>ipt>
				<script>
=====
1. Stored XSS
=============
	An attacker inputs the malicious javascript code into the entry point, and that malicious code is stored in the database. So whenever a user will go to that site of the web application, he will be a target of XSS. This malicious code will remain there in the database until and unless the database administrator does not remove it manually or resets the database.

	Where We can try for stored XSS
	===============================
		1. Comments
		2. Messages
		3. FAQ
		4. Form
		5. RSS Feedback

3. DOM Based XSS
================
	Documentary Object Model
	In this type of xss, our data is not send to the server, but it is updated dynamically.
	There are 3 entities which are vulnerable in DOM Based XSS
		1. document.url
		2. document.location
		3. document.referal

	DOM Based XSS (or as it is called in some texts, “type-0 XSS”) is an XSS attack wherein the attack payload is executed as a result of modifying the DOM “environment” in the victim’s browser used by the original client side script, so that the client side code runs in an “unexpected” manner. That is, the page itself (the HTTP response that is) does not change, but the client side code contained in the page executes differently due to the malicious modifications that have occurred in the DOM environment.


	https://lucideustech.blogspot.com/2018/03/a-practical-guide-to-dom-based-xss.html