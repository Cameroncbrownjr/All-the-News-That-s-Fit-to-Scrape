$.getJSON("/articlesSaved", function (data) {
    $('#articlesSaved').html("")
    for (var i = 0; i < data.length; i++) {
        $("#articlesSaved").append("<p id='articleSaved' data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + "<a href='" + data[i].link + "'>" + data[i].link + "</a><br> <button type='btn' class='btn btn-warning btn-lg btn-block'>Delete</button> </p>");
    }
});
$("#scrape-articles").on('click', function () {
    $.getJSON("/articles", function (data) {
        $('#articles').html("")
        for (var i = 0; i < data.length; i++) {
            $("#articles").append("<p id='article' data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + "<a href='" + data[i].link + "'>" + data[i].link + "</a><br> <button type='btn' class='btn btn-primary btn-lg btn-block'>Save</button> </p>");
        }
    });
})

$(document).on("click", "#article", function () {
    var thisId = $(this).attr("data-id");
    $(this).remove()
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data: {
            title: $("#titleinput").val(),
            body: $("#bodyinput").val()
        }
    })
        .then(function (data) {
            console.log(data);
            $("#notes").empty();
        });
    $("#titleinput").val("");
    $("#bodyinput").val("");
});

$(document).on("click", "#articleSaved", function () {
    var thisId = $(this).attr("data-id");
    $(this).remove()
    $.ajax({
        method: "POST",
        url: "/articlesSaved/" + thisId,
        data: {
            title: $("#titleinput").val(),
            body: $("#bodyinput").val()
        }
    })
        .then(function (data) {
            console.log(data);
            $("#notes").empty();
        });
    $("#titleinput").val("");
    $("#bodyinput").val("");
});
