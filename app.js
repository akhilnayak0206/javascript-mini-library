// make sure the document is ready before firing jQuery
jQuery(function () {
  // define first name and last name inside Greetr object
  const preDefinedGreetrObject = G$('Akhil', 'Nayak');

  //   select login input and listen to click
  $('#login').on('click', function () {
    //   give loginGreetr reference to the above preDefinedGreetrFunction
    let loginGreetr = preDefinedGreetrObject;

    // hide login div
    $('#loginDiv').hide();

    // chain multiple methods like setting language by getting language from select
    // invoking HTMLGreeting function
    // and also using the log function
    loginGreetr
      .setLanguage($('#lang').val())
      .HTMLGreeting('#greeting', true)
      .log();
  });
});
