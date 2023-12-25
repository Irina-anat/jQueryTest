//обробка даних перед відправкою $.param()
$(document).ready(function () {
    let form = {
        name: "User",
        email: "email@gmail.com",
        password: "123qwe123",
    }
    $(".result").text($.param(form));
});