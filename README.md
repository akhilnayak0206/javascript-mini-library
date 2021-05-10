# JavaScript-Mini-Library

A mini JS Framework/Library

This project is made using jQuery, JavaScript, HTML and CSS.

The user can select one of 3 languages and user will be greeted with pre defined name Akhil Nayak

## Quick Start

- Directly run the `index.html` file

## Greetr Library explanation of available functions and how to initialize

## Create a Greetr Object

`const preDefinedGreetrObject = G$('Akhil', 'Nayak');`

## Create a full Name

  `preDefinedGreetrObject.fullName()`  
**Expected Value:**`Akhil Nayak`

## Validate Language

`preDefinedGreetrObject.validate();`  
**Expected value:**  
If the language set is **NOT** from the 3 values `en,es,hn` then  
`Invalid Language` will be shown

## Create greeting

`preDefinedGreetrObject.greeting();`  
**Expected Value:** `Hello Akhil!`

## Create formalGreeting

`preDefinedGreetrObject.formalGreeting();`  
**Expected Value:** `"Greetings, Akhil Nayak"`

## Get greet in console.log

`preDefinedGreetrObject.greet(formal);`  
**Expected Value:**  `Hello Akhil!`  
`Greetr.init {firstName: "Akhil", lastName: "Nayak", language: "en"}`

If `formal` is sent as true or any truthy value then instead of greet message formalGreeting message is shown.

## Get login message with full name  in console.log

`preDefinedGreetrObject.log();`  
**Expected Value:** `Logged in: Akhil Nayak`  
`Greetr.init {firstName: "Akhil", lastName: "Nayak", language: "en"}`

## Get HTML Greeting

If selector is not sent then the following error will be shown

`preDefinedGreetrObject.HTMLGreeting();`  
**Expected Value:** `Greetr.js:112 Uncaught Missing jQuery selector`

`preDefinedGreetrObject.HTMLGreeting(selector,formal);`  
sending selector(element) will send a greeting message and if formal greeting  message is needed then send formal as a truthy value

## Set Language

`preDefinedGreetrObject.setLanguage("hn");`  
**Expected Value:** `Greetr.init {firstName: "Akhil", lastName: "Nayak", language: "hn"}`

If language apart `en,es,hn` from is set it will throw an error.

## Project Info

### Author

> Akhil Nayak

### License

> This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

### Special Thanks

> Thanks to Anthony Alicea for wonderfully explaining the weird parts of JavaScript.

#### If you have any suggestion or doubts do let me know

#### ThankYou.Peace
