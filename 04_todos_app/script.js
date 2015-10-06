var TODOS = [
    {
        created: '2015/11/11 1:00pm',
        message: 'Finish this tutorial'
    },
    {
        created: '2015/11/11 1:10pm',
        message: 'Hurry up!!'
    },
    {
        created: '2015/12/11 12:00pm',
        message: 'Make my own tuorial'
    }
];

$(document).ready(function () {
    var $todos = $('#todos');
    TODOS.forEach(function (todo) {
        var $todo = $('<li class="todo">')
            .append(
                $('<div class="header">')
                .append(
                    $('<span class="date">')
                    .text(todo.created)
                )
                .append(
                    $('<a class="delete-button" href="#">[delete]</a>')
                )
            )
            .append(
                $('<div class="message">')
                .text(todo.message)
            );
        $todo.find('.delete-button').on("click", function (event) {
            event.preventDefault();
            $todo.remove();
        });
        $todos.append($todo);
    });
});
