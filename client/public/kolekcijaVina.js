  if ($('.flash').is(':visible')) {
    setTimeout(() => {
      $('.flash').fadeOut(600);
    }, 1900)
  }

   

  window.setTimeout(() => {
    document.querySelector('.flash').style.display = "none"
  }, 3000)

$('input:-webkit-autofill').each(function () {
    if ($(this).val().length !== "") {
        $(this).siblings('label, i').addClass('active');
    }
});