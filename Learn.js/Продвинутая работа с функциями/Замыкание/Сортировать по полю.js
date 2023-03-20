let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field) {
  return function(a, b) {
    if (a[field] > b[field]) {
      return 1;
    } else {
      return -1;
    }
  }
}

users.sort(byField('name'));
users.forEach(function(user) {
  console.log(user.name);
});

users.sort(byField('age'));
users.forEach(function(user) {
  console.log(user.name);
});

