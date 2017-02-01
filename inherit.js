function First() {
    this.name = 'first';
    this.place = 1;
}

First.prototype.move = function() {
    this.place++;
}

First.prototype.who = function() {
    console.log('who this? ',this, this.name);
}

function Last() {
    this.name = 'last';
    this.place = 100;
}

Last.prototype = Object.create(First.prototype);
Last.prototype.constructor = Last;

var last = new Last();
last.move();
last.who();
