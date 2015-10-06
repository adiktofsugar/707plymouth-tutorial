Lesson 03 - PHP intro
====

- Download and install MAMP https://www.mamp.info/en/downloads/
    - Run "MAMP" (not MAMP pro)
    - Open "Preferences", go to the "Web Server" tab, and set the "Document Root" to the "707plymouth-tutorial" folder, then click OK and "start servers"
    - This is going to run a server that's capable of processing PHP
    - When you visit the "index.php" page, you have to go to it through the server
- Go to http://localhost:8888/03_php_intro/
    - "localhost" is an alias to your local..host. 127.0.0.1 is an ip address to your local computer as well. The ":8888" specifies the port. Normally http requests are on port 80, except for https, which is on port 443 (https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers). Here's a good article on DNS - https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts
- When you go to that page, you should see "Welcome ...you...!"
- Now go to http://localhost:8888/03_php_intro/?username=George
    - You should now see "George" instead of "...you..."

Tests
---
- Change the default name from "...you..." to "Annie"
- Change the query parameter from "username" to "user"
- Make a form that you can enter your name in (https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form). You want the method to be "GET", and an input field that will submit "username"
- Find out what else you can do with php - (http://www.w3schools.com/php/php_intro.asp)
