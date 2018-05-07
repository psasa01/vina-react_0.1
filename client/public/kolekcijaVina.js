$('input:-webkit-autofill').each(function () {
    if ($(this).val().length !== "") {
        $(this).siblings('label, i').addClass('active');
    }
});