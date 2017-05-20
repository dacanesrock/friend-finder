(function($) {
    $(function() {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    $('select').material_select();
    $('.modal').modal();

    $("#submit").on("click", function(event) {
        event.preventDefault();
        var newPerson = {
            name: $("#name").val().trim(),
            photo: $("#photo_link").val().trim(),
            scores: [
                $("#question1").val(),
                $("#question2").val(),
                $("#question3").val(),
                $("#question4").val(),
                $("#question5").val(),
                $("#question6").val(),
                $("#question7").val(),
                $("#question8").val(),
                $("#question9").val(),
                $("#question10").val()
            ]
        };

        $.post("/api/friends", newPerson)
            .done(function(data) {
                alert("hello");
                console.log(newPerson);
            });
    });
});
