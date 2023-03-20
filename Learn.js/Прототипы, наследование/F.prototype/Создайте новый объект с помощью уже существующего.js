function User(name) {
  this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

function Password(pass) {
  this.pass = pass;
}
Password.prototype = {};

let pass = new Password("123qwe");
let pass2 = new pass.constructor("321ewq");
