Lesson 04 - Super simple todos app
====

- Open "index.html"
- You should see a a list of todos
- Read through script.js, style.css and index.html

The css file is showing different ways of targeting elements, and some potentially confusing declarations (color: red, float: right, etc...)

The JS file is using jquery to create a static list of todos, wait for the document to be ready, and then display them all in an existing element. Also it's adding a fairly complex element structure in a weird looking way, and it adds a click handler to the delete button so it can remove the todo later.

Tests
---
- Remove the delete button
- Change the layout to a horizontal list instead of a vertical one
- Make the todo background go white when you hover over it
- Only show the delete button when the todo is being hovered over
- Make a confirm dialog when delete is pressed, so you have to say "ok" to delete the thing
