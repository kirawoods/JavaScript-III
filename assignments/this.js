/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

function greet(name) {
    console.log('Hello ' + name);
    console.log(this);
}

greet('Kira');

// Principle 2

var greet = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greet.speak('Kira');

// Principle 3

function bigHello(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting.toUpperCase() + this.greeter.toUpperCase());
      console.log(this);
    };
  }
  
  const starsky = new bigHello('Starsky');
  const hutch = new bigHello('Hutch');
  
  starsky.speak();
  hutch.speak();

// Principle 4

starsky.speak.call(hutch);
hutch.speak.apply(starsky);