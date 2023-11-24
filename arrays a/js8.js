//exercise 8

function sortByAge(users) {
    users.sort(function(a, b) {
      return a.age - b.age;
    });
  }