// the semi-colon can be added in the start so that if some other libraries or frameworks
// used before this has some unfinished semi-colon(;) then this should do the trick
// Note:- if you are using prettier then the semi-colon gets removed
(function (global, $) {
  // defining something with let or var inside this function will make sure that the values
  // are not available outside

  // define function constructor
  let Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  //   supported languages (English,Spanish,Hindi)
  let supportedLanguages = ['en', 'es', 'hn'];

  // define greeting
  let greetings = {
    en: 'Hello',
    es: 'Hola',
    hn: 'Namaste',
  };

  //   define formal greetings
  let formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
    hn: 'Namaskar',
  };

  //   define logMessage
  let logMessages = {
    en: 'Logged in',
    es: 'Iniciō sesiōn',
    hn: 'log in',
  };

  // initialize prototype
  Greetr.prototype = {
    //   send  full name
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },

    // validate language
    validate: function () {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw 'Invalid Language';
      }
    },

    // send greetings
    greeting: function () {
      return `${greetings[this.language]} ${this.firstName}!`;
    },

    // send formal greetings
    formalGreeting: function () {
      return `${formalGreetings[this.language]}, ${this.fullName()}`;
    },

    // send console log with greeting or formalGreeting
    greet: function (formal) {
      let msg;

      // check if falsy value
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // to make the object chainable
      // eg. a.toString().toSomethingElse().....
      // we return this;
      return this;
    },

    // console log language with full name
    log: function () {
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);
      }

      // to make the object chainable
      // eg. a.toString().toSomethingElse().....
      // we return this;
      return this;
    },

    // set language
    setLanguage: function (lang) {
      this.language = lang;
      this.validate();

      // to make the object chainable
      // eg. a.toString().toSomethingElse().....
      // we return this;
      return this;
    },

    // html greeting
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded.';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      let msg;
      // check if falsy value
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // add msg to the selector
      $(selector).html(msg);

      // to make the object chainable
      // eg. a.toString().toSomethingElse().....
      // we return this;
      return this;
    },
  };

  //   define init with function constructor
  Greetr.init = function (firstName, lastName, language) {
    //   we use this so that JS knows that we are referencing the object inside Greetr
    // and not the window defined variables if they exists so as to avoid collusion
    let self = this;

    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  };

  // give init prototype with prototype so that we don't have to use 'new'
  Greetr.init.prototype = Greetr.prototype;

  //   global(window) Greetr object will point to 2 values the above Greetr and global.G$
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
